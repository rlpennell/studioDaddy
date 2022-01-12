import S from '@sanity/desk-tool/structure-builder'
import { 
  MdLibraryBooks, 
  MdPhotoFilter, 
  MdOutlinePortrait, 
  MdOutlinePhotoLibrary, 
  MdOutlineImageSearch, 
  MdOutlineComment 
} from 'react-icons/md'


export default S.listItem()
.title('Blog Example')
.icon(MdLibraryBooks)
.child(
  S.list()
    .title('Blog Example')
    .items([
      S.documentTypeListItem('post')
        .title('Posts')
        .icon(MdPhotoFilter),
      S.documentTypeListItem('author')
        .title('Authors')
        .icon(MdOutlinePortrait),
      S.documentTypeListItem('comment')
        .title('Comments')
        .icon(MdOutlineComment),
      S.divider(),
      S.documentTypeListItem('category')
        .title('Categories')
        .icon(MdOutlinePhotoLibrary),
      S.documentTypeListItem('subcategory')
        .title('Subcategories')
        .icon(MdOutlineImageSearch),
      S.divider(),
    ])
)