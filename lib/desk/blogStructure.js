import S from '@sanity/desk-tool/structure-builder'
import { 
  MdLibraryBooks, 
  MdPhotoFilter, 
  MdOutlinePortrait, 
  MdOutlinePhotoLibrary, 
  MdOutlineImageSearch, 
  MdOutlineComment,
  MdSettingsSuggest 
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
      S.divider(),
      S.listItem()
        .title('Blog Site Settings')
        .icon(MdSettingsSuggest)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('blogSiteSettings')
        )
    ])
)