import S from '@sanity/base/structure-builder'

export default [
  ...S.defaultInitialValueTemplateItems().filter(item => !['allInputExamples'].includes(item.getId()))
]