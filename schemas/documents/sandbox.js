import React from 'react';
import Link from '../components/Link';
import { studioClient } from '../../lib/utils/studioClient';

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
      name: 'images',
      type: 'array',
      of: [{ type: 'figure' }],
    },
    {
      name: 'form_get_form_url',
      description: (
        <>
          Some text <a href='test'>some link</a>
        </>
      ),
      type: 'string',
      title: 'GET Form Elements URL',
    },
    {
      name: 'actor',
      title: 'Actor',
      type: 'reference',
      to: [{ type: 'person' }],
    },
    {
      name: 'movie',
      title: 'Movie',
      type: 'reference',
      to: [{ type: 'movie' }],
      options: {
        filter: ({ document }) => ({
          filter: '$id in castMembers[].person._ref',
          params: {
            id: document.actor._ref,
          },
        }),
      },
    },
  ],
};
