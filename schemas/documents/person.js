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
      name: 'contact',
      title: 'Contact Info',
      type: 'contact'
    },
    {
      name: 'isAuthor',
      type: 'boolean',
      initialValue: true,
      hidden: true
    }
  ],
}
