export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'menuItemList',
      type: 'array',
      title: 'Menu Items',
      of: [{ type: 'menuItem' }],
    },
  ],
};
