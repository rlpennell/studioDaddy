
import defaultResolve, { PublishAction } from 'part:@sanity/base/document-actions'
import { singleEdits } from './singleEditPages'

export default function resolveDocumentActions(props) {
  if(singleEdits.includes(props.type)) {
    return defaultResolve(props).filter(action => action == PublishAction)
  }
  
  return [...defaultResolve(props)]
}