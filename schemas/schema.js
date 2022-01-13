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
import author from './documents/author'
import post from './documents/post'
import comment from './documents/comment'
import siteSettings from './documents/siteSettings'
import figure from './objects/figure'
import simpleBlockContent from './objects/simpleBlockContent'
import project from './documents/project'
import gallery from './objects/gallery'
import grid from './objects/community/grid'
import sandbox from './documents/sandbox'
import freeform from './objects/community/freeform'
import movie from './documents/movie'
import person from './documents/person'
import screening from './documents/screening'
import plotSummary from './objects/plotSummary'
import plotSummaries from './objects/plotSummaries'
import castMember from './objects/castMember'
import crewMember from './objects/crewMember'
import product from './documents/product'
import vendor from './documents/vendor'
import productVariant from './objects/productVariant'

import localeString from './locale/String'
import localeText from './locale/Text'
import localeBlockContent from './locale/BlockContent'

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
    comment,
    siteSettings,
    figure,
    simpleBlockContent,
    project,
    gallery,
    grid,
    sandbox,
    freeform,
    movie,
    person,
    screening,
    plotSummary,
    plotSummaries,
    castMember,
    crewMember,
    product,
    vendor,
    localeText,
    localeBlockContent,
    localeString,
    productVariant,
  ]),
})
