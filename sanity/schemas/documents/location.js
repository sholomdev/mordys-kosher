import { MdLocationOn as icon } from 'react-icons/md';

export default {
  name: 'location',
  type: 'document',
  title: 'Location',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'headingImage',
      title: 'Heading Image',
      type: 'image',
    },
    {
      name: 'cartLocation',
      title: 'Cart Location',
      type: 'string',
    },
    {
      name: 'featureImage1',
      title: 'Feature Image 1',
      type: 'image',
    },
    {
      name: 'featureImage2',
      title: 'Feature Image 2',
      type: 'image',
    },
    {
      name: 'hours',
      title: 'Hours',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'manager',
      title: 'Manager',
      type: 'string',
    },
    {
      name: 'operatedBy',
      title: 'Operated By',
      type: 'string',
    },
    {
      name: 'hechsher',
      type: 'string',
      title: 'Kosher Supervision',
    },
    {
      name: 'service',
      type: 'string',
      title: 'Service',
    },
    {
      name: 'about',
      type: 'text',
      title: 'About',
    },
    {
      title: 'menu',
      name: 'menu',
      type: 'reference',
      to: [{ type: 'menu' }],
    },
  ],
};
