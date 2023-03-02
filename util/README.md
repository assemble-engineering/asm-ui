# **Assemble Utilities**

Welcome to Assemble Utilities!

We aim to create a hub for TypeScript Utilities that can be reusable throughout our Assemble projects.

## Table of Contents

- [Using The Library](#usage)
- [Contributing](#contributing)
- [Publishing](#publishing)
- [Maintainers](#maintainers)
- [License](#license)

## Importing and using the library <a id='usage'></a>
1. `yarn add @assemble-inc/util` or `npm i @assemble-inc/util`
2. import a hook with its named export i.e. `import { formatPhoneNumber } from '@assemble-inc/util';`

## Contributing <a id='contributing'></a>

1. Clone this repo (or parent repo)
2. Create a branch: `git checkout -b developer-name/component-name`
3. Make some changes
4. Test your changes
5. Push your branch and open a Pull Request
6. Let the team know
#
## Publishing <a id='publishing'></a>

Then every time you make an update to the library, republish it to npm:

1. Run `yarn publish-packages`
2. At root of repo run `yarn changeset` and follow instructions - this will automatically bump major/minor versions of packages and prepare them to be published. Any packages with `"private": true` in their `package.json` will not be published.
3. Run `yarn changeset publish`

_note: In order to publish, you will need to log into your NPM account first._
#
## Maintainers<a id="maintainers"></a>

**Assemble Frontend Team**

## License <a id='license'></a>

This code is open source software licensed under the MIT License.
