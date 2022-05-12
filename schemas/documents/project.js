import { MdBedroomBaby } from 'react-icons/md';

export default {
  name: 'project',
  title: 'Project',
  icon: MdBedroomBaby,
  type: 'document',
  preview: {
    select: {
      title: 'title',
      ended: 'ended',
      slug: 'slug',
      media: 'mainImage',
    },
    prepare({ title = 'No title', ended, slug = {}, media }) {
      const path = `/${ended}/${slug.current}/`;
      return {
        title,
        media,
        subtitle: ended ? ended : 'In progress',
      };
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'presentationSlides',
      title: 'Presentation Slides',
      type: 'array',
      of: [
        {
          name: 'slide',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [{ type: 'image' }],
            },
          ],
        },
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description:
        'You can use this field to schedule projects where you show them',
      type: 'datetime',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'simpleBlockContent',
    },
    {
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{ type: 'person' }],
    },
    {
      name: 'started',
      title: 'Started',
      type: 'date',
    },
    {
      name: 'ended',
      title: 'Ended',
      type: 'date',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure',
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'gallery',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
};
