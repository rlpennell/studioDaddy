import React from 'react';

export default {
  name: 'sandbox',
  type: 'document',
  icon: () => <img src='../../static/a.jpg' />,
  groups: [
    { name: 'curr', title: 'Current' },
    { name: 'community', title: 'Community' },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      initialValue: 'Sandbox',
      readOnly: true,
      hidden: true,
    },
    {
      title: 'Director',
      name: 'director',
      type: 'reference',
      to: [{ type: 'person' }],
      options: {
        disableNew: true,
      },
    },
    {
      name: 'team',
      title: 'Team',
      type: 'object',
      fields: [
        {
          name: 'person',
          title: 'Person',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'person' }],
              title: 'Member',
            },
          ],
        },
      ],
    },
  ],
};
