// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import category from './documents/category'
import blockContent from './objects/blockContent'
import page from './documents/page'
import section from './objects/section'
import subcategory from './documents/subcategory'
import categoryGroup from './objects/categoryGroup'
import allInputExamples from './documents/allInputExamples'
import author from './documents/blog/author'
import post from './documents/blog/post'
import comment from './documents/blog/comment'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    category,
    blockContent,
    section,
    subcategory,
    categoryGroup,
    page,
    allInputExamples,
    author,
    post,
    comment
  ]),
})