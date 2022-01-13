import { studioClient } from "./studioClient"
import cq from 'concurrent-queue'

// Create a queue to limit the rate at which you write changes to Sanity
let queue = cq().limit({ concurrency: 2 }).process(function (task) {
  return new Promise(function (resolve, reject) {
      console.log(task + ' started')
      setTimeout(resolve.bind(undefined, task), 1000)
  })
})

//We write our query for the document(s) we want to change fields on
const query = `*[_type == 'person' && image._type == 'image']`

//Create an object that contains the fields and values you'd like to write

const addField = async () => {
  // Use the configured Studio client to fetch our documents
  const docs = await studioClient.fetch(query)
  // Loop through all of the docs returned from our query
  for (const doc of docs){
    // Add a message to help us know the upload is happening
    queue(doc).then(async () => {
    console.log('Uploading...')
    // Tell the client to patch the current document
    studioClient.patch(doc._id)
      // Set the fields we specified in our mutation
      .set({
        image: {
          _type: 'figure',
          asset: doc.image.asset
        }
      })
      // Commit the changes
      .commit()
      .then(updatedDoc => {
        console.log(`Hurray, the doc is updated! New document:${updatedDoc._id}`)
      })
      .catch((err) => {
        console.error('Oh no, the update failed: ', err.message)
      })
    })
  }
}

addField()

// execute this script by running 
// $ sanity exec ./lib/utils/addField.js --withUserToken