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
      title: "Name",
      description: "This will be the displayed name on the site",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
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