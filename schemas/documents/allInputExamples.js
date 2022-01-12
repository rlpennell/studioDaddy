import ClientAsyncSelect from '../customInputs/ClientAsyncSelect'
import UrlDownload from '../customInputs/UrlDownload'
import AsyncSelect from '../customInputs/AsyncSelect'
import CreatedAt from '../customInputs/CreatedAt'

const catHandler = (json) => {
  return json.data.map(({ breed }) => ({
    title: breed,
    value: breed.toLowerCase().split(' ').join('-')
  }))
}

export default {
  name: 'allInputExamples',
  title: 'All Input Examples',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'createdAt',
      title: 'Display the _createdAt field within the document',
      type: 'string',
      inputComponent: CreatedAt
    },
    {
      name: 'referenceField',
      title: 'Field within a Reference',
      description: 'This field uses the @sanity/client to allow you to indicate a specific field within a selected reference', 
      type: 'object',
      fields: [
        {
          name: 'page',
          title: 'Page',
          type: 'reference',
          to: [{ type: 'page' }]
        },
        {
          name: 'section',
          title: 'Section',
          type: 'string',
          inputComponent: ClientAsyncSelect
        }
      ]
    },
    {
      name: 'upload',
      title: 'Upload with Download Link',
      description: 'This field displays a link to the URL of an uploaded asset',
      type: 'object',
      fields: [
        {
          name: 'file',
          title: 'File',
          type: 'file'
        },
        {
          name: 'link',
          title: 'Link',
          type: 'string',
          hidden: ({parent}) => !parent?.file,
          inputComponent: UrlDownload,
        }
      ]
    },
    {
      name: 'asyncSelect',
      title: 'Asynchronous List Options',
      description: 'Hits an API and populates a drop down select. Needs to be provided with a url and a handler for the response.',
      type: 'string',
      options: {
        url: 'https://catfact.ninja/breeds',
        handler: catHandler
      },
      inputComponent: AsyncSelect
    },
  ]
}