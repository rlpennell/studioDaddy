export default {
  name: "subcategory",
  title: "Subcategory",
  type: "document",
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