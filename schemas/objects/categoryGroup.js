export default {
  name: "categoryGroup",
  title: 'Category Group',
  type: "object",
  fields: [
    {
      name: "main",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "subcategory",
      type: "reference",
      to: [{ type: "subcategory" }],
      options: {
        filter: ({ parent }) => {
          return parent.main
            ? {
                filter: "category._ref == $ref",
                params: {
                  ref: parent.main._ref,
                },
              }
            : "";
        },
      },
    },
  ],
};