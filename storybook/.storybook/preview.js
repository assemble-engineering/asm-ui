import { addParameters } from '@storybook/react';
import "!style-loader!css-loader!@assemble-inc/core/dist/esm/inputs/react-datepicker-styles.css"
/*
  To add stylesheets to stylesheetToggle, use the {from: ..., to: ...} pattern in ./main.js
  to serve a relative folder at your desired location, then link it below:
*/
addParameters({
  stylesheetToggle: {
    stylesheets: [
      // {
      //   id: 'Date picker',
      //   title: 'Date picker stylesheet',
      //   url: 'datepicker/react-datepicker-styles.css',
      // },
      {
        id: 'apple',
        title: 'Apple stylesheet',
        url: 'apple-ui/style.css',
      },
      {
        id: 'base',
        title: 'Base stylesheet',
        url: 'base-ui/style.css',
      },
      {
        id: 'null',
        title: 'No stylesheet',
        url: 'none',
      }
    ],
  },
});
