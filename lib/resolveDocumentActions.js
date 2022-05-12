import defaultResolve, {
  PublishAction,
} from 'part:@sanity/base/document-actions';
import { ScheduleAction } from '@sanity/scheduled-publishing';
import SetAndPublishAction from './setAndPublish';
import { singleEdits } from './singleEditPages';

export default function resolveDocumentActions(props) {
  if (singleEdits.includes(props.type)) {
    return defaultResolve(props).filter(action => action == PublishAction);
  }

  return [...defaultResolve(props), ScheduleAction];
}
