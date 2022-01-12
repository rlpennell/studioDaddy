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
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: []
        }
      ]
    }
  ]
}