import defaultResolve from 'part:@sanity/base/document-badges'

import { StatusBadge } from './StatusBadge'

export default function resolveDocumentBadges(props) {
  return [...defaultResolve(props), StatusBadge]
}