import S from '@sanity/desk-tool/structure-builder'
import { MdCode } from 'react-icons/md'

import blogStructure from './blogStructure'
import portfolioStructure from './portfolioStructure'

export default () =>
  S.list()
    .title('Examples')
    .items([
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
      portfolioStructure
    ])