# @haensl/environments

JS runtime environments. Simple object.

[![NPM](https://nodei.co/npm/@haensl%2Fenvironments.png?downloads=true)](https://nodei.co/npm/@haensl%2Fenvironments/)

[![npm version](https://badge.fury.io/js/@haensl%2Fenvironments.svg)](http://badge.fury.io/js/@haensl%2Fenvironments)
[![CircleCI](https://circleci.com/gh/haensl/environments.svg?style=svg)](https://circleci.com/gh/haensl/environments)


## Installation

### Via `npm`

```bash
$ npm install -S @haensl/environments
```

### Via `yarn`

```bash
$ yarn add @haensl/environments
```

## Usage

1. [Install @haensl/environments](#installation)

2. Use environments in your projects:


    ESM, i.e. `import`

    ```javascript
    import environments from '@haensl/environments';

    // Spreading the import works, too.
    // import { production } from '@haensl/environments';

    // ...

    if (currentEnvironment === environments.production) {
      // do stuff on production only
    }
    ```

    CJS, i.e. `require`

    ```javascript
    // Mind the curly braces!
    const { environments } = require('@haensl/environments');

    // Using the `default` prop of the export works, too.
    // const environments = require('@haensl/environments').default;

    // ...

    if (currentEnvironment === environments.production) {
      // do stuff on production only
    }
    ```

## Synopsis

The `environments` object is a simple JavaScript object that maps to strings:

```javascript
{
  development: 'development',
  production: 'production',
  qa: 'qa',
  test: 'test'
}
```



## [Changelog](CHANGELOG.md)
