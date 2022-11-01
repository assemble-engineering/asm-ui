# **Assemble UI**

Welcome to Assemble UI!

We aim to create a hub for UI components that can be reusable throughout our Assemble projects.

## Table of Contents

- [Using The Library](#usage)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Publishing](#publishing)
- [Maintainers](#maintainers)
- [License](#license)

#

## Importing and using the library <a id='usage'></a>
1. `yarn add @assemble-inc/asm-core` or `npm i @assemble-inc/asm-core`
2. import a component with its named export i.e. `import { Button } from '@assemble-inc/asm-core';`

Assemble UI takes a BYOS ("bring your own styles") approach to styling the components.
To make this possible, all components come equipped with at least one className prop you can use to style them.

Each component has a default class name formatted like `asm-<component-name>` i.e. `asm-button`

### View the list of available components [here](./COMPONENTS.md).
#
## Getting Started <a id='getting-started'></a>

To add or update a component, you'll need to start development locally:
1. `git clone https://github.com/assembleinc/asm-ui`
2. `cd /path/to/asm-ui`
3. `yarn` to install devDependencies
4. `yarn build` to create builds of all packages
5. `cd storybook` & `yarn start` to start storybook
#
## Contributing <a id='contributing'></a>

1. Clone this repo
2. Create a branch: `git checkout -b developer-name/component-name`
3. Make some changes
4. Test your changes in Storybook
5. Push your branch and open a Pull Request
6. Let the team know in #asm-component-libraries
#
## Publishing <a id='publishing'></a>

Then every time you make an update to the library, republish it to npm:

1. Run `yarn publish-packages`
2. At root of repo run `yarn changeset` and follow instructions - this will automatically bump major/minor versions of packages and prepare them to be published. Any packages with `"private": true` in their `package.json` will not be published.
3. Run `npm publish`

_note: In order to publish, you will need to log into your NPM account first._
#
## Maintainers<a id="maintainers"></a>

**Assemble Frontend Team**

## License <a id='license'></a>

This code is open source software licensed under the MIT License.
