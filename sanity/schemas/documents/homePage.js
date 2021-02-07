import { AiFillHome as icon } from 'react-icons/ai';

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
    },
    {
      name: 'mordyBioTitle',
      type: 'string',
      title: 'Mordy Bio Title',
    },
    {
      name: 'mordyImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mordyTitle',
      type: 'string',
      title: `Mordy's Title`,
    },
    {
      name: 'description',
      type: 'text',
      title: 'Mordy Info',
    },
  ],
};
