import PathInput from "../components/PathInput"
import { socials } from "../inputs/socials";

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
  description: "Can handle pasting of an entire URL or just a username. A rebuild of the Community Studio version using @sanity/ui",
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'email'
    },
    ...socialInputs
  ]
}