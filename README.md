[![Build Status](https://travis-ci.org/flowcommerce/eslint-plugin-flowio.svg?branch=master)](https://travis-ci.org/flowcommerce/eslint-plugin-flowio)

# eslint-plugin-flowio

A package that provides ESLint rules used by Flow.io team as an extensible shared plugin.

## Installation

Install [ESLint](https://github.com/eslint/eslint) either locally or globally.

```
$ npm install eslint
```

If you installed ESLint globally, you have to install this plugin globally too.
Otherwise, install it locally.

```
$ npm install eslint-plugin-flowio
```

## Configuration

Add plugins section and specify `esling-plugin-flowio` as a plugin.

```json
{
  "plugins": [
    "@flowio/flowio"
  ]
}
```

Finally, enable all of the rules that you would like to use. Use our preset to
get reasonable defaults quickly, and/or choose your own:

```json
{
  "rules": {
    "flowio/export-extensions": "error"
  }
}
```

# List of supported rules

* [flowio/export-extensions](docs/rules/export-extensions.md): Ensure consistent use of file extension within the export path
