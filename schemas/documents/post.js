import { MdPhotoFilter } from 'react-icons/md';

export default {
  name: 'post',
  title: 'Post',
  icon: MdPhotoFilter,
  type: 'document',
  preview: {
    select: {
      title: 'title',
      subtitle: 'author.name',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
        media: MdPhotoFilter,
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: () => true,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'person' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure',
    },
    {
      name: 'category',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'categoryGroup' }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  orderings: [
    {
      title: 'Author',
      name: 'author',
      by: [{ field: 'author.name', direction: 'asc' }],
    },
    {
      title: 'Date, Asc',
      name: 'dateAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
    {
      title: 'Date, Desc',
      name: 'dateDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
};
