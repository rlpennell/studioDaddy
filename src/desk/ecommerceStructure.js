import S from '@sanity/desk-tool/structure-builder'
import { createSuperPane } from 'sanity-super-pane'
import categories from './categories'

import { 
  MdStore, 
  MdRotate90DegreesCcw,
  MdShoppingBasket, 
  MdOutlinePortrait, 
  MdSettingsSuggest 
} from 'react-icons/md'


export default S.listItem()
  .title('Ecommerce Example')
  .icon(MdStore)
  .child(
    S.list()
      .title('Ecommerce Example')
      .items([
        S.documentTypeListItem('product')
          .title('Products')
          .icon(MdShoppingBasket),
        S.listItem()
          .title('Bulk Product Actions')
          .icon(MdRotate90DegreesCcw)
          .child(createSuperPane('product', S)),
        S.documentTypeListItem('vendor')
          .title('Vendors')
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
              .documentId('ecommerceSiteSettings')
          )
      ])
  )