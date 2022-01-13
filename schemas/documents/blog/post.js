import { MdPhotoFilter } from 'react-icons/md'

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
    },
    prepare({ title, author }) {
      return {
        title,
        author,
        media: MdPhotoFilter
      }
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'}
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
      of: [{type: 'categoryGroup'}]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ]
}