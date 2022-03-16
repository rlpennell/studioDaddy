import ClientAsyncSelect from '../components/ClientAsyncSelect';
import UrlDownload from '../components/UrlDownload';
import AsyncSelect from '../components/AsyncSelect';
import CreatedAt from '../components/CreatedAt';
import UrlWithButton from '../components/UrlWithButton';
import { catHandler } from '../../src/utils/catHandler';
import ReferenceSelect from '../components/ReferenceSelect';
import Wireframe from '../components/Wireframe';
import StringWithLimits from '../components/StringWithLimits';

export default {
  name: 'allInputExamples',
  title: 'All Input Examples',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      hidden: true,
    },
    {
      name: 'createdAt',
      title: 'Display the _createdAt field within the document',
      type: 'string',
      inputComponent: CreatedAt,
    },
    {
      name: 'referenceField',
      title: 'Field within a Reference',
      description:
        'This field uses the @sanity/client to allow you to indicate a specific field within a selected reference',
      type: 'object',
      fields: [
        {
          name: 'page',
          title: 'Page',
          type: 'reference',
          to: [{ type: 'page' }],
        },
        {
          name: 'section',
          title: 'Section',
          type: 'string',
          hidden: ({ document }) => !document.referenceField.page,
          inputComponent: ClientAsyncSelect,
        },
      ],
    },
    {
      name: 'upload',
      title: 'Upload with Download Link',
      description: 'This field displays a link to the URL of an uploaded asset',
      type: 'object',
      fields: [
        {
          name: 'file',
          title: 'File',
          type: 'file',
        },
        {
          name: 'link',
          title: 'Link',
          type: 'string',
          hidden: ({ parent }) => !parent?.file,
          inputComponent: UrlDownload,
        },
      ],
    },
    {
      name: 'asyncSelect',
      title: 'Asynchronous List Options',
      description:
        'Hits an API and populates a drop down select. Needs to be provided with a url and a handler for the response.',
      type: 'string',
      options: {
        url: 'https://catfact.ninja/breeds',
        handler: catHandler,
      },
      inputComponent: AsyncSelect,
    },
    {
      name: 'contact',
      type: 'contact',
    },
    {
      name: 'fetchObject',
      description:
        'A naive component that will fetch data from the specified URL and write something to the field below',
      title: 'Fetch Stuff with This Object',
      type: 'object',
      fields: [
        {
          name: 'url',
          title: 'Url to Fetch',
          type: 'url',
          inputComponent: UrlWithButton,
        },
        {
          name: 'fieldToWrite',
          title: 'Field to Write',
          type: 'string',
        },
      ],
    },
    {
      name: 'ReferenceMultiSelect',
      description: 'This will create a multiselect checkbox list of references',
      title: 'Country',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'country' },
        },
      ],
      inputComponent: ReferenceSelect,
    },
    {
      name: 'template',
      title: 'Template',
      type: 'string',
      options: {
        list: [
          { title: 'Template A', value: 'a' },
          { title: 'Template B', value: 'b' },
          { title: 'Template C', value: 'c' },
        ],
      },
    },
    {
      name: 'wireframe',
      title: 'Wireframe',
      type: 'string',
      hidden: ({ document }) => !document?.template,
      inputComponent: Wireframe,
    },
  ],
};
