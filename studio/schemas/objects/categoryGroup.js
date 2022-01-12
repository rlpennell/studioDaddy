export default {
  name: "categoryGroup",
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
      to: [{ type: "subCategory" }],
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