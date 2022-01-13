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
    }
  ]
}