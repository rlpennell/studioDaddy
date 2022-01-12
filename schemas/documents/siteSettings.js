import { MdSettingsSuggest } from 'react-icons/md'

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title ? title : 'Looks like you need to add a title...',
        media: MdSettingsSuggest
      }
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      initialValue: 'Site Settings'
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text'
    }
  ]
}