import { MdOutlinePortrait } from 'react-icons/md'

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  preview: {
    select: {
      name: 'name',
    },
    prepare({name}) {
      return {
        title: name,
        media: MdOutlinePortrait
      }
    }
  },
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'simpleBlockContent'
    }
  ]
}