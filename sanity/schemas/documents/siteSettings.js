import { BsFillGearFill as icon } from 'react-icons/bs';

export default {
  name: 'siteSettings',
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Site Name',
      type: 'string',
      description: 'Name the site',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'contactInfo',
    },
  ],
};
