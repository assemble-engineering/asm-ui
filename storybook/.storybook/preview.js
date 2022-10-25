import { addParameters } from '@storybook/react';


/*
  To add stylesheets to stylesheetToggle, use the {from: ..., to: ...} pattern in ./main.js
  to serve a relative folder at your desired location, then link it below:
*/
addParameters({
  stylesheetToggle: {
    stylesheets: [
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
    ],
  },
});
