import crewMember from '../objects/crewMember';

export default {
  name: 'sandbox',
  type: 'document',
  groups: [
    { name: 'curr', title: 'Current' },
    { name: 'community', title: 'Community' },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      initialValue: 'Sandbox',
      readOnly: true,
      hidden: true,
    },
  ],
};
