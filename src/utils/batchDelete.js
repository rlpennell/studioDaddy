import { studioClient } from "./studioClient"
import cq from 'concurrent-queue'

// Create a queue to limit the rate at which you write changes to Sanity
let queue = cq().limit({ concurrency: 2 }).process(function (task) {
  return new Promise(function (resolve, reject) {
      setTimeout(resolve.bind(undefined, task), 1000)
  })
})

//We write our query for the document(s) we want to delete
const query = `*[_type == 'category' && !(title in ['Countries', 'Weapons', 'Foods'])]`

const batchDelete = async () => {
  // Use the configured Studio client to fetch our documents
  const docs = await studioClient.fetch(query)
  // Loop through all of the docs returned from our query
  for (const doc of docs){
    queue(doc).then(async () => {
    // delete docs
      studioClient.delete(doc._id)
      .then(() => {
      console.log(`Deleted ${doc._id}`)
      })
      .catch((err) => {
        console.error('Delete failed: ', err.message)
      })
    })
  }
}

batchDelete()

// execute this script by running 
// $ sanity exec ./lib/utils/batchDelete.js --withUserToken