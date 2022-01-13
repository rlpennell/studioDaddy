import { MdOutlinePortrait } from 'react-icons/md'

export default {
  name: 'person',
  title: 'Person',
  icon: MdOutlinePortrait,
  type: 'document',
  preview: {
    select: {title: 'name', media: 'image'},
  },
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
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
    },
    {
      name: 'isAuthor',
      title: 'Is an Author?',
      type: 'boolean'
    }
  ],
}
