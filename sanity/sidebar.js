import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { BsFillGearFill as icon } from 'react-icons/bs';

export default function Sidebar() {
  return S.list()
    .title(`Mordy's Kosher`)
    .items([
      S.listItem()
        .title('Settings')
        .icon(icon)
        .child(
          S.editor().schemaType('siteSettings').documentId('mordys-kosher')
        ),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'siteSettings'
      ),
    ]);
}
