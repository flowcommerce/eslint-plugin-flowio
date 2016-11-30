# eslint-plugin-flowio

A collection of ESLint rules used internally by Flow.io team.

## Installation

Install [ESLint][1] either locally or globally.

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
    "flowio"
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

[1]: https://github.com/eslint/eslint