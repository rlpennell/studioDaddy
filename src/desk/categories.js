import S from '@sanity/desk-tool/structure-builder'

import {  MdOutlinePhotoLibrary, MdOutlineImageSearch } from 'react-icons/md'

export default [
  S.documentTypeListItem('category')
    .title('Categories')
    .icon(MdOutlinePhotoLibrary),
  S.documentTypeListItem('subcategory')
    .title('Subcategories')
    .icon(MdOutlineImageSearch),
// S.listItem()
//   .title('Subcategories by Category')
//   .icon(MdOutlineImageSearch)
//   .child(
//     S.documentTypeList('category')
//       .title('Subcategories')
//       //TODO fix this fucken create button
//       .child(categoryId =>
//         S.documentList()
//           .title('Subcategories')
//           .filter('_type == "subcategory" && $categoryId == category._ref')
//           .params({ categoryId })
//       )
//   ),
]