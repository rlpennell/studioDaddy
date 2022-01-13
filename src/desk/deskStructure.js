import S from '@sanity/desk-tool/structure-builder'
import { singleEdits } from '../singleEditPages'
import blogStructure from './blogStructure'
import portfolioStructure from './portfolioStructure'

import { 
  MdCode, 
  MdOutlineBugReport, 
  MdOutlineViewInAr, 
  MdOutlineFlaky, 
  MdGroupWork 
} from 'react-icons/md'
import movieStructure from './movieStructure'

export default () =>
  S.list()
    .title('Examples')
    .items([
      S.listItem()
      .title('Sandbox')
      .icon(MdOutlineBugReport)
      .child(
        S.list()
          .title('Sandbox')
          .items([
            S.listItem()
            .title('Hell Mouth')
            .icon(MdOutlineBugReport)
            .child(
              S.document()
                .schemaType('sandbox')
                .documentId('sandbox')
            ),
          ])
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