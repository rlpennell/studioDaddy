import { MdOutlinePhotoLibrary } from 'react-icons/md';

export default {
  name: 'category',
  title: 'Category',
  icon: MdOutlinePhotoLibrary,
  type: 'document',
  preview: {
    select: {
      title: 'title',
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
  ],
};
