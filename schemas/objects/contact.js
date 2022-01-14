import PathInput from "../../components/PathInput"

const socials = [
  {
    title: 'Github',
    prefix: 'https://github.com/',
  },
  {
    title: 'Twitter',
    prefix: 'https://twitter.com/',
  },
  {
    title: 'LinkedIn',
    prefix: 'https://www.linkedin.com/in/',
  },
  {
    title: 'Dev.to',
    prefix: 'https://dev.to/',
  },
]

const socialInputs = socials.map(item => ({
  name: item.title.toLowerCase().split('.')[0],
  title: item.title,
  type: 'string',
  inputComponent: PathInput,
  options: {
    baseUrl: item.prefix,
    customFormat: (value) => {
      // We want a RegExp that will capture https, http and plain domain versions of vendor.prefix
      // Ex: https://github.com (vendor.prefix) => (https?:\/\/)?github.com
      const regEx = new RegExp('(https?://)?' + item.prefix.split('https://')[1], 'gm');
      return value.toLowerCase().replace(regEx, '').replace('/', '');
    },
  }
}))

export default {
  name: 'contact',
  title: 'Contact Info',
  type: 'object',
  description: "All of these are optional. Include only your handle or profile ID - or paste the full URL and we'll format it.",
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'email'
    },
    ...socialInputs
  ]
}