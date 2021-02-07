// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import siteSettings from './documents/siteSettings';

import location from './documents/location';
import homePage from './documents/homePage';
import contactInfo from './objects/contactInfo';
import foodItem from './documents/foodItem';
import menu from './objects/menu';
import menuItem from './objects/menuItem';
import gallery from './documents/gallery';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    siteSettings,
    homePage,
    contactInfo,
    location,
    menu,
    foodItem,
    menuItem,
    gallery,
  ]),
});

//re-add homepage
