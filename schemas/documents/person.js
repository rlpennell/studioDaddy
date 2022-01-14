import { MdOutlinePortrait } from 'react-icons/md'

console.log(process)

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
      name: 'isAuthor',
      title: 'Is an Author?',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint'
    }
  ],
}
