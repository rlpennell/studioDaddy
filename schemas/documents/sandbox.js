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
      type: 'array',
      name: 'modules',
      of: [
        {
          type: 'object',
          name: 'intro',
          title: 'Intro',
          fields: [
            { type: 'boolean', name: 'cta_button', title: 'CTA button' },
            {
              type: 'string',
              name: 'button_label',
              title: 'Button label',
              hidden: ({ parent }) => {
                console.log(parent);
                return false;
              },
            },
          ],
        },
      ],
    },
  ],
};
