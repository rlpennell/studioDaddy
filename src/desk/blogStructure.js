import S from '@sanity/desk-tool/structure-builder'
import categories from './categories'

import { 
  MdLibraryBooks, 
  MdPhotoFilter, 
  MdOutlinePortrait, 
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
        S.listItem()
          .title('Authors')
          .icon(MdOutlinePortrait)
          .child(
            S.documentList()
              .title('Authors')
              .filter(`_type == 'person' && isAuthor`)
          ),
        S.documentTypeListItem('comment')
          .title('Comments')
          .icon(MdOutlineComment),
        S.divider(),
        ...categories,
        S.divider(),
        S.listItem()
          .title('Site Settings')
          .icon(MdSettingsSuggest)
          .child(
            S.document()
              .schemaType('siteSettings')
              .documentId('blogSiteSettings')
          )
      ])
  )