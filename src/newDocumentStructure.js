import S from '@sanity/base/structure-builder';
import { singleEdits } from './singleEditPages';

export default [
  ...S.defaultInitialValueTemplateItems().filter(
    (item) => !singleEdits.includes(item.getId())
  ),
];
