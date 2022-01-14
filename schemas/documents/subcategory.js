import { MdOutlineImageSearch } from 'react-icons/md'
export default {
  name: "subcategory",
  title: "Subcategory",
  icon: MdOutlineImageSearch,
  type: "document",
  preview: {
    select: {
      title: 'title',
    },
  },
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: "category",
      title: "Category",
      description: "Assign to a category",
      type: "reference",
      to: { type: "category" },
    },
  ],
};