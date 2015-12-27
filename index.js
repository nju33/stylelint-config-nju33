module.exports = {
  'rules': {
    'string-quotes': 'double',

    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-no-hex': null,
    'color-no-invalid-hex': true,
    'color-no-named': true,

    'number-leading-zero': 'never',
    'number-max-precision': 3,
    'number-no-trailing-zeros': true,
    'number-zero-length-no-unit': true,

    'function-blacklist': null,
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-whitespace-after': 'always',
    'function-url-quotes': 'none',
    'function-whitelist': null,

    'value-no-vendor-prefix': null,

    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',

    'unit-blacklist': null,
    'unit-whitelist': null,

    'property-blacklist': null,
    'property-no-vendor-prefix': null,
    'property-unit-blacklist': null,
    'property-unit-whitelist': null,
    'property-whitelist': null,

    'custom-property-no-outside-root': null,
    'custom-property-pattern': null,

    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-no-important': true,

    'declaration-block-no-single-line': true,
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,

    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': 'always-single-line',
    'block-no-empty': null,
    'block-opening-brace-newline-after': null,
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',

    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',

    'rule-nested-empty-line-before': ['always', {
      except: ['first-nested']
    }],
    'rule-no-duplicate-properties': true,
    'rule-no-shorthand-property-overrides': true,
    'rule-non-nested-empty-line-before': null,
    'rule-properties-order': null,
    'rule-trailing-semicolon': 'always',

    'root-no-standard-properties': null,

    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-no-vendor-prefix': null,
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',

    'custom-media-pattern': null,

    'media-query-parentheses-space-inside': 'never',

    'media-query-list-comma-newline-after': 'always',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always',
    'media-query-list-comma-space-before': 'never',

    'at-rule-empty-line-before': null,
    'at-rule-no-vendor-prefix': null,

    'comment-empty-line-before': ['always', {
      except: ['first-nested']
    }],
    'comment-whitespace-inside': 'always',

    'indentation': 2,
    'max-line-length': 80,
    'max-empty-lines': 1,
    'no-eol-whitespace': true,
    'no-missing-eof-newline': true
  }
}
