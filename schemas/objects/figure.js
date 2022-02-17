import PreviewComponent from "../components/PreviewComponent"

export default {
  name: 'figure',
  title: 'Image',
  type: 'image',
  fields: [
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    }
  ],
  options: {
    hotspot: true
  },
  preview: {
    select: {
      _key: '_key',
      alt: 'alt',
      caption: 'caption',
      asset: 'asset'
    },
    prepare({ _key, alt, caption, asset }) {
      return { _key, alt, caption, asset }
    },
    component: PreviewComponent
  }
}