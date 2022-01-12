import S from '@sanity/desk-tool/structure-builder'
import React from 'react'
import { MdCode, MdLibraryBooks } from 'react-icons/md'

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
      S.listItem()
          .title('Blog Example')
          .icon(MdLibraryBooks)
          .child(
            S.list()
              .title('Blog Example')
              .items([
                ...S.documentTypeListItems().filter(listItem => ['post', 'author', 'comment', 'category', 'subcategory'].includes(listItem.getId())),  
              ])
          )
    ])