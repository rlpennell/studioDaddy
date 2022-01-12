import { MdOutlinePhotoLibrary } from 'react-icons/md'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title,
        media: MdOutlinePhotoLibrary
      }
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}