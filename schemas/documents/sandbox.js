import PreviewComponent from "../components/PreviewComponent"

export default {
  name: 'sandbox',
  type: 'document',
  groups: [
    { name: 'common', title: 'Common'},
    { name: 'community', title: 'Community'}
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      initialValue: 'Sandbox',
      readOnly: true,
      hidden: true
    },
    {
      name: 'radioCollection',
      title: 'Radio Collection',
      description: 'An example of using columns in an object for @RyanMurray',
      type: 'object',
      options: {
        columns: 2
      },
      group: 'community',
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
      description: 'A slug field that ignores apostrophes and becomes readOnly after being set once',
      type: 'slug',
      readOnly: ({ document }) => document?.slug,
      options: {
        source: 'title',
        slugify: input => input
          .toLowerCase()
          .trim()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')
          .replace(/\-\-+/g, '-'),
      },
      group: 'common'
    },
    {
      name: 'multiSelect',
      title: 'Multi Select',
      type: 'array',
      of: [
        { type: 'string' }
      ],
      options: {
        list: [
          { title: 'Option 1', value: 'option1' },
          { title: 'Option 2', value: 'option2' },
          { title: 'Option 3', value: 'option3' }
        ]
      },
      group: 'common'
    },
    {
      name: 'dropDown',
      title: 'Drop Down',
      type: 'string',
      options: {
        list: [
          { title: 'Option 1', value: 'option1' },
          { title: 'Option 2', value: 'option2' },
          { title: 'Option 3', value: 'option3' }
        ]
      },
      group: 'common'
    },
    {
      title: 'Backgrounds',
      name: 'backgrounds',
      type: 'array',
      of: [{ type: 'localizedImage' }],

    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
    {
      name: "slides",
      title: "Slides",
      type: "array",
      of: [
        {
          type: 'figure',
        },
      ],
    },
  ]
}