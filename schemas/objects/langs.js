const languages = ['en', 'sv'];
export default {
  title: 'Localized image',
  name: 'localizedImage',
  type: 'object',
  fields: languages.map((lang, i) => ({
    title: lang,
    name: lang,
    type: 'image',
    fieldset: i !== 0 ? 'translations' : null,
  })),
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true, collapsed: true },
    },
  ],
  preview: {
    select: {
      title: 'en.asset.originalFilename',
      media: 'en',
    }
  },
};