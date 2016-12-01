# Ensure consistent use of file extension within the export path

Some file resolve algorithms allow you to omit the file extension within the 
export source path. For example the `node` resolver can resolve `./foo/bar` to
the absolute path `/user/someone/foo/bar.js` because the `.js` extension is
resolved automatically by default. Depending on the resolver you can configure
more extensions to get resolved automatically.

In order to provide a consitent use of file extensions across your code base,
this rule can enforce or disallow the use of certain file extensions.

## Rule details

This rule either takes one string option, one object option, or a string and an 
object option. If it is the string `"never"` (the default value), then the rule 
forbids the use for any extension. If it is the string `"always"`, then the rule 
enforces the use of extensions for all export statements.

By providing an object you can configure each extension separately, so for 
example `{ "js": "always", "json": "never" }` would always enforce the use of 
the `.js` extension but never allow the use of the `.json` extension.

By providing both a string and an object, the string will set the default 
setting for all extensions, and the object can be used to set granular overrides 
for specific extensions. For example, `[<enabled>, "never", { "svg": "always" }]` 
would require that all extensions are omitted, except for `"svg"`.

## Examples

The following patterns are considered problems when configuration 
set to `"never"`:

```javascript
export { default } from './foo.js'
export { default } from './bar.json'
export { default as Component } from './Component.jsx'
export { default } from 'express/index.js'
```

The following patterns are not considered problems when configuration 
set to `"never"`:

```javascript
export { default } from './foo'
export { default } from './bar'
export { default as Component } from './Component'
export { default } from 'express/index'
```

The following patterns are considered problems when configuration 
set to `"always"`

```javascript
export { default } from './foo'
export { default } from './bar'
export { default as Component } from './Component'
export { default } from 'express/index'
```

The following patterns are not considered problems when configuration 
set to `"always"`

```javascript
export { default } from './foo.js'
export { default } from './bar.json'
export { default as Component } from './Component.jsx'
export { default } from 'express/index.js'
```

## When not to use it

If you are not concerned about a consistent usage of file extension.