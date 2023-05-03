# **Assemble UI**

We aim to create a hub for UI components that can be reusable throughout our Assemble projects.

<ins>

## Table of Contents

</ins>

🔖 [Using The Library](#usage)<br />
🔖 [Getting Started](#getting-started)<br />
🔖 [Contributing](#contributing)<br />
🔖 [Publishing](#publishing)<br />
🔖 [Maintainers](#maintainers)<br />
🔖 [License](#license)<br />
🔖 [Other Packages](#other)<br />

<ins>

## Importing and using the library <a id='usage'></a>

</ins>
1. `yarn add @assemble-inc/core` or `npm i @assemble-inc/core`
2. import a component with its named export i.e. `import { Button } from '@assemble-inc/core';`

Assemble UI takes a BYOS ("bring your own styles") approach to styling the components.
To make this possible, all components come equipped with at least one default but overwritable className prop you can use to style them.

Each component has a default class name formatted like `asm-<component-name>` i.e. `asm-button`

### View the list of available components [here](./asm-core/COMPONENTS.md).

<br/>
<br/>
<ins>

## Getting Started <a id='getting-started'></a>
</ins>

To add or update a component, you'll need to start development locally:
1. `git clone https://github.com/assembleinc/asm-ui`
2. `cd /path/to/asm-ui`
3. `yarn` to install devDependencies
4. `yarn build` to create builds of all packages
<!-- 5. `cd storybook` & `yarn start` to start storybook -->

<br/>
<br/>
<ins>

## Contributing <a id='contributing'></a>
</ins>

1. Clone this repo
2. Create a branch: `git checkout -b developer-name/component-name`
3. Make some changes
<!-- 4. Test your changes in Storybook -->
5. Push your branch and open a Pull Request
6. Let the team know in #asm-component-libraries

<br/>
<br/>
<ins>

## Publishing <a id='publishing'></a>
</ins>

Then every time you make an update to the library, republish it to npm:

1. Run `yarn publish`.
2. Bump version according to [semver](https://semver.org) best practices.
<br /><br />
> 📝 **Note:** _In order to publish, you will need to log into your NPM account first._

<br/>
<br/>
<ins>

## Maintainers<a id="maintainers"></a>
</ins>

**Assemble Frontend Team**

<br/>
<br/>
<ins>

## License <a id='license'></a>
</ins>
This code is open source software licensed under the MIT License.
<br/>
<br/>

<br/>
<br/>
<ins>

## Other Packages <a id='other'></a>
</ins>

We also package Utilities and React Hooks in this repo.
#### View the list of available utilities [here](./util/UTILITIES.md).

#### View the list of available hooks [here](./hooks/HOOKS.md).

<br/>
<br/>
