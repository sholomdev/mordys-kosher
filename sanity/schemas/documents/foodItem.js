import { MdRestaurantMenu as icon } from 'react-icons/md';

export default {
  title: 'Food Item',
  name: 'foodItem',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'image',
      type: 'image',
      title: Image,
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
