import { MdOutlineDocumentScanner } from 'react-icons/md'

export default {
  name: 'page',
  title: 'Page',
  icon: MdOutlineDocumentScanner,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'section' }
      ]
    },
    {
      name: 'content',
      title: 'content',
      type: 'array',
      of: [
        { type: 'number' }
      ]
    },
    {
      name: 'orderBy',
      title: 'Order By',
      type: 'string',
      options: {
        list: [
          { title: 'Latest', value: 'latest'},
          { title: 'Old', value: 'old'},
        ]
      }
    }
  ]
}