const path = require('path');

const { hasOwnProperty } = Object.prototype;

const enumValues = {
  enum: ['always', 'never'],
};

const patternProperties = {
  type: 'object',
  patternProperties: { '.*': enumValues },
};

module.exports = {
  meta: {
    docs: {},
    schema: {
      anyOf: [{
        type: 'array',
        items: [enumValues],
        additionalItems: false,
      }, {
        type: 'array',
        items: [patternProperties],
        additionalItems: false,
      }, {
        type: 'array',
        items: [enumValues, patternProperties],
        additionalItems: false,
      }],
    },
  },
  create(context) {
    const configuration = context.options[0] || 'never';

    const defaultConfig = typeof configuration === 'string' ? configuration : null;

    const modifiers = typeof configuration === 'object'
      ? { ...configuration }
      : { ...context.options[1] };

    function isUseOfExtensionForbidden(extension) {
      if (!hasOwnProperty.call(modifiers, extension)) {
        modifiers[extension] = defaultConfig;
      }

      return modifiers[extension] === 'never';
    }

    function checkFileExtension(node) {
      if (node.source) {
        const exportPath = node.source.value;
        const extension = path.extname(exportPath).substring(1);

        if (extension && isUseOfExtensionForbidden(extension)) {
          context.report({
            node: node.source,
            message: `Unexpected use of file extension "${extension}" for "${exportPath}"`,
          });
        } else if (!extension && !isUseOfExtensionForbidden(extension)) {
          context.report({
            node: node.source,
            message: `Missing use of file extension for "${exportPath}"`,
          });
        }
      }
    }

    return {
      ExportNamedDeclaration: checkFileExtension,
      ExportAllDeclaration: checkFileExtension,
    };
  },
};
