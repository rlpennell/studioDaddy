import { studioClient } from "./studioClient"
import cq from 'concurrent-queue'

// Create a queue to limit the rate at which you write changes to Sanity
let queue = cq().limit({ concurrency: 2 }).process(task => {
  return new Promise(function (resolve, reject) {
      setTimeout(resolve.bind(undefined, task), 1000)
  })
})

const mutateDocs = async () => {
  //Fetch the documents you need to mutate
  const query = `*[_type == '']`
  const docs = await studioClient.fetch(query)
  // Loop through all of the docs returned from our query
  for (const doc of docs){
    queue(doc).then(async () => {
    // Add a message to help us know the upload is happening
      console.log(`Mutating ${doc._id}`)
      // Tell the client to patch the current document
      studioClient.patch(doc._id)
        // Set the field
        .setIfMissing({ evaluations: [] })
        .insert('after', 'evaluations[-1]', ['your-text'])
        // Commit the changes
        .commit()
        .then(updatedDoc => console.log(`Hurray, the doc is updated! New document:`, updatedDoc))
        .catch(err => console.error('Oh no, the update failed: ', err.message))
    })
  }
}

mutateDocs()

// execute this script by running 
// $ sanity exec ./lib/utils/mutateDocs.js --withUserToken