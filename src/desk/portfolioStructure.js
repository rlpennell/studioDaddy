import S from '@sanity/desk-tool/structure-builder'
import categories from './categories'

import { 
  MdOutlineViewQuilt, 
  MdBedroomBaby, 
  MdOutlinePortrait, 
  MdSettingsSuggest 
} from 'react-icons/md'


export default S.listItem()
.title('Portfolio Example')
.icon(MdOutlineViewQuilt)
.child(
  S.list()
    .title('Portfolio Example')
    .items([
      S.documentTypeListItem('project')
        .title('Projects')
        .icon(MdBedroomBaby),
      S.documentTypeListItem('person')
        .title('Members')
        .icon(MdOutlinePortrait),
      S.divider(),
      ...categories,
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .icon(MdSettingsSuggest)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('portfolioSiteSettings')
        )
    ])
)