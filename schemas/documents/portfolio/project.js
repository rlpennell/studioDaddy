import {format,parseISO} from 'date-fns'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      ended: 'ended',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({title = 'No title', ended, slug = {}, media}) {
      const dateSegment = format(parseISO(ended), 'yyyy/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
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
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them',
      type: 'datetime'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'simpleBlockContent'
    },
    {
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{type: 'author'}]
    },
    {
      name: 'started',
      title: 'Started',
      type: 'date'
    },
    {
      name: 'ended',
      title: 'Ended',
      type: 'date'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
  ]
}