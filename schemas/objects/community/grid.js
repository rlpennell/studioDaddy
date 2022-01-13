export default {
  name: 'grid',
  type: 'object',
  fields: [
    {
      name: 'gridSize',
      type: 'number',
      options: {
        list: [
          { title: '1', value: 1 },
          { title: '2', value: 2 },
          { title: '3', value: 1 },
        ]
      },
      initialValue: 1
    },
    {
      title: 'Content Blocks',
      name: 'blocks',
      type: 'array',
      description: 'The content blocks for this grid',
      of: [{ type: 'freeform' }]
    }
  ]
}