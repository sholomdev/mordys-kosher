import { formatMoney } from '../../utils/utils';

export default {
  name: 'menuItem',
  title: 'Menu Items',
  type: 'object',
  fields: [
    {
      name: 'foodItem',
      title: 'Food Item',
      type: 'reference',
      to: [{ type: 'foodItem' }],
    },

    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Item price',
    },
  ],
  preview: {
    select: {
      name: 'foodItem.name',
      image: 'foodItem.image',
      price: 'price',
    },
    prepare({ name, image, price }) {
      return {
        title: `${name ? name : ''} - ${price ? formatMoney(price) : ''}`,
        media: image,
      };
    },
  },
};
