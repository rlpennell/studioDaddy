export default {
  name: 'sandbox',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      initialValue: 'Sandbox',
      readOnly: true,
      hidden: true
    },
    {
      title: 'Page Sections',
      name: 'modules',
      type: 'array',
      of: [
        { type: 'grid' },
      ]
    },
  ]
}