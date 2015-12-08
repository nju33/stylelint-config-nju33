module.exports = {
  'rules': {
    'string-quotes': [2, 'double'],

    'color-hex-case': [2, 'lower'],
    'color-hex-length': [2, 'short'],
    'color-no-hex': 0,
    'color-no-invalid-hex': 2,
    'color-no-named': 2,

    'number-leading-zero': [2, 'never'],
    'number-max-precision': [2, 3],
    'number-no-trailing-zeros': 2,
    'number-zero-length-no-unit': 2,

    'function-blacklist': 0,
    'function-calc-no-unspaced-operator': 2,
    'function-comma-newline-after': [2, 'always-multi-line'],
    'function-comma-newline-before': [2, 'never-multi-line'],
    'function-comma-space-after': [2, 'always'],
    'function-comma-space-before': [2, 'never'],
    'function-linear-gradient-no-nonstandard-direction': 2,
    'function-parentheses-newline-inside': [2, 'always-multi-line'],
    'function-parentheses-space-inside': [2, 'never-single-line'],
    'function-space-after': [2, 'always'],
    'function-url-quotes': [2, 'none'],
    'function-whitelist': 0,

    'value-no-vendor-prefix': 0,

    'value-list-comma-newline-after': [2, 'always-multi-line'],
    'value-list-comma-newline-before': [2, 'never-multi-line'],
    'value-list-comma-space-after': [2, 'always-single-line'],
    'value-list-comma-space-before': [2, 'never'],

    'unit-blacklist': 0,
    'unit-whitelist': 0,

    'property-blacklist': 0,
    'property-no-vendor-prefix': 0,
    'property-unit-blacklist': 0,
    'property-unit-whitelist': 0,
    'property-whitelist': 0,

    'custom-property-no-outside-root': 0,
    'custom-property-pattern': 0,

    'declaration-bang-space-after': [2, 'never'],
    'declaration-bang-space-before': [2, 'always'],
    'declaration-colon-newline-after': [2, 'always-multi-line'],
    'declaration-colon-space-after': [2, 'always-single-line'],
    'declaration-colon-space-before': [2, 'never'],
    'declaration-no-important': 2,

    'declaration-block-semicolon-newline-after': [2, 'always-multi-line'],
    'declaration-block-semicolon-newline-before': [2, 'never-multi-line'],
    'declaration-block-semicolon-space-after': [2, 'always-single-line'],
    'declaration-block-semicolon-space-before': [2, 'never'],

    'nesting-block-opening-brace-newline-before': 0,
    'nesting-block-opening-brace-space-before': 0,

    'block-closing-brace-newline-after': [2, 'always'],
    'block-closing-brace-newline-before': [2, 'always-multi-line'],
    'block-closing-brace-space-after': 0,
    'block-closing-brace-space-before': [2, 'always-single-line'],
    'block-no-empty': 0,
    'block-opening-brace-newline-after': 0,
    'block-opening-brace-newline-before': 0,
    'block-opening-brace-space-after': [2, 'always-single-line'],
    'block-opening-brace-space-before': [2, 'always'],

    'selector-list-comma-newline-after': [2, 'always-multi-line'],
    'selector-list-comma-newline-before': [2, 'never-multi-line'],
    'selector-list-comma-space-after': [2, 'always-single-line'],
    'selector-list-comma-space-before': [2, 'never'],

    'rule-nested-empty-line-before': [2, 'always', {
      except: ['first-nested']
    }],
    'rule-no-duplicate-properties': 2,
    'rule-no-shorthand-property-overrides': 2,
    'rule-no-single-line': 2,
    'rule-non-nested-empty-line-before': 0,
    'rule-properties-order': 0,
    'rule-single-line-max-declarations': [2, 1],
    'rule-trailing-semicolon': [2, 'always'],

    'root-no-standard-properties': 0,

    'media-feature-colon-space-after': [2, 'always'],
    'media-feature-colon-space-before': [2, 'never'],
    'media-feature-name-no-vendor-prefix': 0,
    'media-feature-range-operator-space-after': [2, 'always'],
    'media-feature-range-operator-space-before': [2, 'always'],

    'custom-media-pattern': 0,

    'media-query-parentheses-space-inside': [2, 'never'],

    'media-query-list-comma-newline-after': [2, 'always'],
    'media-query-list-comma-newline-before': [2, 'never-multi-line'],
    'media-query-list-comma-space-after': [2, 'always'],
    'media-query-list-comma-space-before': [2, 'never'],

    'at-rule-empty-line-before': 0,
    'at-rule-no-vendor-prefix': 0,

    'comment-empty-line-before': [2, 'always', {
      except: ['first-nested']
    }],
    'comment-space-inside': [2, 'always'],

    'indentation': [2, 2],
    'max-line-length': [2, 80],
    'no-eol-whitespace': 2,
    'no-missing-eof-newline': 2,
    'no-multiple-empty-lines': 2
  }
}
