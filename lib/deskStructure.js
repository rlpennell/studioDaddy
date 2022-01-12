import React from 'react'
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Examples')
    .items([
      S.listItem()
        .title('Custom Input Examples')
        .icon(() => (<span>✨</span>))
        .child(
          S.document()
            .schemaType('allInputExamples')
            .documentId('allInputExamples')
        ),
      S.divider(),
      S.listItem()
          .title('Blog Example')
          .icon(() => (<span>🖍</span>))
          .child(
            S.list()
              .title('Blog Example')
              .items([
                ...S.documentTypeListItems().filter(listItem => ['post', 'author', 'comment', 'category', 'subcategory'].includes(listItem.getId())),  
              ])
          )
    ])