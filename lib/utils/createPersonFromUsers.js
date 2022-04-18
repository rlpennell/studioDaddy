import { studioClient } from "./studioClient"
import cq from 'concurrent-queue'
import userStore from 'part:@sanity/base/user'

// Create a queue to limit the rate at which you write changes to Sanity
let queue = cq().limit({ concurrency: 2 }).process(function (task) {
  return new Promise(function (resolve, reject) {
      setTimeout(resolve.bind(undefined, task), 1000)
  })
})

const createUserDocuments = async () => {
  const allUsers = await studioClient
    .fetch(`*[_id in path('_.groups.*')].members[@ != 'everyone']`)
    .then(res => userStore.getUsers(res))
    .then(users => users.filter(user => user.isCurrentUser))

    for (const user of allUsers){
      const doc = {
        _type: 'person',
        _id: user.id,
        name: user.displayName,
        //other fields you have in your schema
      }
      queue(doc).then(async () => {
        //create the doc via the client
        studioClient.create(doc)
          .then(updatedDoc => {
            console.log(`Hurray, the doc is updated! New document:${updatedDoc._id}`)
          })
          .catch((err) => {
            console.error('Oh no, the update failed: ', err.message)
          })
      })
    }
 
}



createUserDocuments()

// execute this script by running 
// $ sanity exec ./path-to-your-script --withUserToken --mock-browser-env