
import defaultResolve, { PublishAction } from 'part:@sanity/base/document-actions'

export default function resolveDocumentActions(props) {
  if(props.type == 'allInputExamples'){
    return defaultResolve(props).filter(action => action == PublishAction)
  }
  
  return [...defaultResolve(props)]
}