import { studioClient } from "./studioClient"
import cq from 'concurrent-queue'

// Create a queue to limit the rate at which you write changes to Sanity
let queue = cq().limit({ concurrency: 2 }).process(function (task) {
  return new Promise(function (resolve, reject) {
      setTimeout(resolve.bind(undefined, task), 1000)
  })
})

const changeDocumentType = async () => {
  // Use the configured Studio client to fetch our documents
  const query = `*[_type == 'category' && !(title in ['Countries', 'Weapons', 'Foods'])]`

  const docs = await studioClient.fetch(query)
  // Loop through all of the docs returned from our query
  for (const doc of docs){
    const newDoc = {
      ...doc,
      _id: `${doc._id}-1`,
      _type: 'subcategory',
    }
    queue(newDoc).then(async () => {
      // Tell the client to patch the current document
      studioClient.create(newDoc)
        .then(updatedDoc => {
          console.log(`Hurray, the doc is updated! New document:${updatedDoc._id}`)
        })
        .catch((err) => {
          console.error('Oh no, the update failed: ', err.message)
        })
    })
  }
}


changeDocumentType()

// execute this script by running 
// $ sanity exec ./lib/utils/mutateDocs.js --withUserToken