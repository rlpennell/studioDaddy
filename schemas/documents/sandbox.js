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
    {
      name: 'radioCollection',
      title: 'Radio Collection',
      type: 'object',
      options: {
        columns: 2
      },
      fields: [
        {
          name: 'radioOne',
          title: 'Radio One',
          type: 'string',
          options: {
            list: [
              { title: 'Default', value: 'default' },
              { title: 'Yes', value: 'yes' },
              { title: 'No', value: 'No' }
            ],
            layout: 'radio',
            direction: 'horizontal'
          }
        },
        {
          name: 'radioTwo',
          title: 'Radio Two',
          type: 'string',
          options: {
            list: [
              { title: 'Default', value: 'default' },
              { title: 'Yes', value: 'yes' },
              { title: 'No', value: 'No' }
            ],
            layout: 'radio',
            direction: 'horizontal'
          }
        }
      ]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      readOnly: ({ document }) => document?.slug,
      slugify: input => input
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-'),
      options: {
        source: 'title'
      }
    }
  ]
}