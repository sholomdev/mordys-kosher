import { MdPhotoLibrary as icon } from 'react-icons/md';

export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'headerImage',
      type: 'image',
      title: 'Header Image',
    },
    {
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
};
