import S from '@sanity/desk-tool/structure-builder'
import { singleEdits } from '../singleEditPages'
import blogStructure from './blogStructure'
import portfolioStructure from './portfolioStructure'
import SeoPane from 'sanity-plugin-seo-pane'
import movieStructure from './movieStructure'
import ecommerceStructure from './ecommerceStructure'
import resolveProductionUrl from '../resolveProductionUrl'

import { 
  MdCode, 
  MdOutlineBugReport, 
  MdOutlineViewInAr, 
  MdOutlineFlaky, 
  MdGroupWork 
} from 'react-icons/md'


export const getDefaultDocumentNode = ({documentId, schemaType}) => {
  if (schemaType == 'post') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(SeoPane)
        .options({
          keywords: 'seo.keywords',
          synonyms: 'seo.synonyms',
          url: (doc) => resolveProductionUrl(doc),
        })
        .title('SEO'),
    ])
  }
  return S.document().views([
    S.view.form(),
  ])
}

export default () =>
  S.list()
    .title('Examples')
    .items([
      S.listItem()
        .title('Sandbox')
        .icon(MdOutlineBugReport)
        .child(
          S.document()
            .schemaType('sandbox')
            .documentId('sandbox')
        ),
      S.listItem()
        .title('Custom Input Examples')
        .icon(MdCode)
        .child(
          S.document()
            .schemaType('allInputExamples')
            .documentId('allInputExamples')
        ),
      S.divider(),
      blogStructure,
      portfolioStructure,
      movieStructure,
      ecommerceStructure,
      S.divider(),
      S.listItem()
        .title('All')
        .icon(MdOutlineViewInAr)
        .child(
          S.list()
            .title('All')
            .items([
              ...S.documentTypeListItems()
                .filter(listItem => !singleEdits.includes(listItem.getId()))
            ])
        ),
    ])