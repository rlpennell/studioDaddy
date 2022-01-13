import S from '@sanity/desk-tool/structure-builder'

import {  MdOutlinePhotoLibrary, MdOutlineImageSearch } from 'react-icons/md'

export default [
  S.documentTypeListItem('category')
    .title('Categories')
    .icon(MdOutlinePhotoLibrary),
  S.documentTypeListItem('subcategory')
    .title('Subcategories')
    .icon(MdOutlineImageSearch),
]