'use strict';

module.exports = {
    "extends"        : [],
    "plugins"        : [],
    "processors"     : [],
    "ignoreFiles"    : [],
    "defaultSeverity": "error",
    "rules"          : {
        "color-hex-case"                                    : [
            "lower",
            {
                "severity": "error"
            }
        ],
        "color-hex-length"                                  : [
            "short",
            {
                "severity": "error"
            }
        ],
        "color-named"                                       : [
            "always-where-possible",
            {
                "ignore"          : [],
                "ignoreProperties": [],
                "severity"        : "error"
            }
        ],
        "color-no-hex"                                      : [
            null,
            {
                "severity": "error"
            }
        ],
        "color-no-invalid-hex"                              : [
            true,
            {
                "severity": "error"
            }
        ],
        "font-family-name-quotes"                           : [
            "always-where-recommended",
            {
                "severity": "error"
            }
        ],
        "font-family-no-duplicate-names"                    : [
            true,
            {
                "ignoreFontFamilyNames": [],
                "severity"             : "error"
            }
        ],
        "font-family-no-missing-generic-family-keyword"     : [
            true,
            {
                "severity": "error"
            }
        ],
        "font-weight-notation"                              : [
            "named-where-possible",
            {
                "ignore"  : [],
                "severity": "error"
            }
        ],
        "function-blacklist"                                : [
            [],
            {
                "severity": "error"
            }
        ],
        "function-calc-no-invalid"                          : [
            true,
            {
                "severity": "error"
            }
        ],
        "function-calc-no-unspaced-operator"                : [
            true,
            {
                "severity": "error"
            }
        ],
        "function-comma-newline-after"                      : [
            "always-multi-line",
            {
                "severity": "error"
            }
        ],
        "function-comma-newline-before"                     : [
            "never-multi-line",
            {
                "severity": "error"
            }
        ],
        "function-comma-space-after"                        : [
            "always-single-line",
            {
                "severity": "error"
            }
        ],
        "function-comma-space-before"                       : [
            "never",
            {
                "severity": "error"
            }
        ],
        "function-linear-gradient-no-nonstandard-direction" : [
            true,
            {
                "severity": "error"
            }
        ],
        "function-max-empty-lines"                          : [
            0,
            {
                "severity": "error"
            }
        ],
        "function-name-case"                                : [
            "lower",
            {
                "ignoreFunctions": [],
                "severity"       : "error"
            }
        ],
        "function-parentheses-newline-inside"               : [
            "always-multi-line",
            {
                "severity": "error"
            }
        ],
        "function-parentheses-space-inside"                 : [
            "never-single-line",
            {
                "severity": "error"
            }
        ],
        "function-url-no-scheme-relative"                   : [
            null,
            {
                "severity": "error"
            }
        ],
        "function-url-quotes"                               : [
            "never",
            {
                "except"  : [],
                "severity": "error"
            }
        ],
        "function-url-scheme-blacklist"                     : [
            [],
            {
                "severity": "error"
            }
        ],
        "function-url-scheme-whitelist"                     : [
            null,
            {
                "severity": "error"
            }
        ],
        "function-whitelist"                                : [
            null,
            {
                "severity": "error"
            }
        ],
        "function-whitespace-after"                         : [
            "always",
            {
                "severity": "error"
            }
        ],
        "number-leading-zero"                               : [
            "never",
            {
                "severity": "error"
            }
        ],
        "number-max-precision"                              : [
            5,
            {
                "ignoreUnits": [],
                "severity"   : "error"
            }
        ],
        "number-no-trailing-zeros"                          : [
            true,
            {
                "severity": "error"
            }
        ],
        "string-no-newline"                                 : [
            true,
            {
                "severity": "error"
            }
        ],
        "string-quotes"                                     : [
            "single",
            {
                "severity": "error"
            }
        ],
        "length-zero-no-unit"                               : [
            true,
            {
                "ignore"  : [],
                "severity": "error"
            }
        ],
        "linebreaks"                                        : [
            "unix",
            {
                "severity": "error"
            }
        ],
        "time-min-milliseconds"                             : [
            100,
            {
                "severity": "error"
            }
        ],
        "unit-blacklist"                                    : [
            [],
            {
                "ignoreProperties"       : [],
                "ignoreMediaFeatureNames": {
                    "unit": []
                },
                "severity"               : "error"
            }
        ],
        "unit-case"                                         : [
            "lower",
            {
                "severity": "error"
            }
        ],
        "unit-no-unknown"                                   : [
            true,
            {
                "ignoreUnits"    : [],
                "ignoreFunctions": [],
                "severity"       : "error"
            }
        ],
        "unit-whitelist"                                    : [
            null,
            {
                "severity": "error"
            }
        ],
        "value-keyword-case"                                : [
            "lower",
            {
                "ignoreProperties": [],
                "ignoreKeywords"  : [],
                "severity"        : "error"
            }
        ],
        "value-no-vendor-prefix"                            : [
            true,
            {
                "ignoreValues": [],
                "severity"    : "warning"
            }
        ],
        "value-list-comma-newline-after"                    : [
            "always-multi-line",
            {
                "severity": "error"
            }
        ],
        "value-list-comma-newline-before"                   : [
            "never-multi-line",
            {
                "severity": "error"
            }
        ],
        "value-list-comma-space-after"                      : [
            "always-single-line",
            {
                "severity": "error"
            }
        ],
        "value-list-comma-space-before"                     : [
            "never",
            {
                "severity": "error"
            }
        ],
        "value-list-max-empty-lines"                        : [
            0,
            {
                "severity": "error"
            }
        ],
        "custom-property-empty-line-before"                 : [
            "always",
            {
                "except"  : [
                    "after-comment",
                    "after-custom-property",
                    "first-nested"
                ],
                "ignore"  : [],
                "severity": "error"
            }
        ],
        "custom-property-pattern"                           : [
            null,
            {
                "severity": "error"
            }
        ],
        "shorthand-property-no-redundant-values"            : [
            true,
            {
                "severity": "error"
            }
        ],
        "property-blacklist"                                : [
            [],
            {
                "severity": "error"
            }
        ],
        "property-case"                                     : [
            "lower",
            {
                "severity": "error"
            }
        ],
        "property-no-unknown"                               : [
            true,
            {
                "ignoreProperties": [],
                "checkPrefixed"   : false,
                "severity"        : "error"
            }
        ],
        "property-no-vendor-prefix"                         : [
            true,
            {
                'ignoreProperties': [],
                'severity'        : 'warning'
            }
        ],
        "property-whitelist"                                : [
            null,
            {
                "severity": "error"
            }
        ],
        "keyframe-declaration-no-important"                 : [
            true,
            {
                "severity": "error"
            }
        ],
        "keyframes-name-pattern"                            : [
            "^[a-z][-_a-z0-9]*$",
            {
                "severity": "error"
            }
        ],
        "declaration-bang-space-after"                      : [
            "never",
            {
                "severity": "error"
            }
        ],
        "declaration-bang-space-before"                     : [
            "always",
            {
                "severity": "error"
            }
        ],
        "declaration-colon-newline-after"                   : [
            "always-multi-line",
            {
                "severity": "error"
            }
        ],
        "declaration-colon-space-after"                     : [
            "always-single-line",
            {
                "severity": "error"
            }
        ],
        "declaration-colon-space-before"                    : [
            "never",
            {
                "severity": "error"
            }
        ],
        "declaration-empty-line-before"                     : [
            "always",
            {
                "except"  : [
                    "after-comment",
                    "after-declaration",
                    "first-nested"
                ],
                "ignore"  : [],
                "severity": "error"
            }
        ],
        "declaration-no-important"                          : [
            true,
            {
                "severity": "warning"
            }
        ],
        "declaration-property-unit-blacklist"               : [
            {},
            {
                "severity": "error"
            }
        ],
        "declaration-property-unit-whitelist"               : [
            null,
            {
                "severity": "error"
            }
        ],
        "declaration-property-value-blacklist"              : [
            {},
            {
                "severity": "error"
            }
        ],
        "declaration-property-value-whitelist"              : [
            null,
            {
                "severity": "error"
            }
        ],
        "declaration-block-no-duplicate-properties"         : [
            true,
            {
                "ignore"          : [
                    "consecutive-duplicates-with-different-values"
                ],
                "ignoreProperties": [],
                "severity"        : "warning"
            }
        ],
        "declaration-block-no-redundant-longhand-properties": [
            true,
            {
                "ignoreShorthands": [],
                "severity"        : "error"
            }
        ],
        "declaration-block-no-shorthand-property-overrides" : [
            true,
            {
                "severity": "error"
            }
        ],
        "declaration-block-semicolon-newline-after"         : [
            "always",
            {
                "severity": "error"
            }
        ],
        "declaration-block-semicolon-newline-before"        : [
            "never-multi-line",
            {
                "severity": "error"
            }
        ],
        "declaration-block-semicolon-space-after"           : [
            "always-single-line",
            {
                "severity": "error"
            }
        ],
        "declaration-block-semicolon-space-before"          : [
            "never",
            {
                "severity": "error"
            }
        ],
        "declaration-block-single-line-max-declarations"    : [
            1,
            {
                "severity": "error"
            }
        ],
        "declaration-block-trailing-semicolon"              : [
            "always",
            {
                "severity": "error"
            }
        ],
        "block-closing-brace-empty-line-before"             : [
            "never",
            {
                "except"  : [],
                "severity": "error"
            }
        ],
        "block-closing-brace-newline-after"                 : [
            "always",
            {
                "ignoreAtRules": [],
                "severity"     : "error"
            }
        ],
        "block-closing-brace-newline-before"                : [
            "always",
            {
                "severity": "error"
            }
        ],
        "block-closing-brace-space-after"                   : [
            "always-single-line",
            {
                "severity": "error"
            }
        ],
        "block-closing-brace-space-before"                  : [
            "always-single-line",
            {
                "severity": "error"
            }
        ],
        "block-no-empty"                                    : [
            true,
            {
                "ignore"  : [],
                "severity": "warning"
            }
        ],
        "block-opening-brace-newline-after"                 : [
            "always",
            {
                "severity": "error"
            }
        ],
        "block-opening-brace-newline-before"                : [
            "always",
            {
                "severity": "error"
            }
        ],
        "block-opening-brace-space-after"                   : [
            "always-single-line",
            {
                "severity": "error"
            }
        ],
        "block-opening-brace-space-before"                  : [
            "always-single-line",
            {
                "ignoreAtRules": [],
                "severity"     : "error"
            }
        ],
        "selector-attribute-brackets-space-inside"          : [
            "never",
            {
                "severity": "error"
            }
        ],
        "selector-attribute-operator-blacklist"             : [
            [],
            {
                "severity": "error"
            }
        ],
        "selector-attribute-operator-space-after"           : [
            "never",
            {
                "severity": "error"
            }
        ],
        "selector-attribute-operator-space-before"          : [
            "never",
            {
                "severity": "error"
            }
        ],
        "selector-attribute-operator-whitelist"             : [
            null,
            {
                "severity": "error"
            }
        ],
        "selector-attribute-quotes"                         : [
            "always",
            {
                "severity": "error"
            }
        ],
        "selector-class-pattern"                            : [
            "^[a-z][-_a-z0-9]*$",
            {
                "resolveNestedSelectors": true,
                "severity"              : "error"
            }
        ],
        "selector-combinator-blacklist"                     : [
            [],
            {
                "severity": "error"
            }
        ],
        "selector-combinator-space-after"                   : [
            "always",
            {
                "severity": "error"
            }
        ],
        "selector-combinator-space-before"                  : [
            "always",
            {
                "severity": "error"
            }
        ],
        "selector-combinator-whitelist"                     : [
            null,
            {
                "severity": "error"
            }
        ],
        "selector-descendant-combinator-no-non-space"       : [
            true,
            {
                "severity": "error"
            }
        ],
        "selector-id-pattern"                               : [
            "^[a-z][-_a-z0-9]*$",
            {
                "severity": "error"
            }
        ],
        "selector-max-attribute"                            : [
            2,
            {
                "ignoreAttributes": [],
                "severity"        : "warning"
            }
        ],
        "selector-max-class"                                : [
            2,
            {
                "severity": "warning"
            }
        ],
        "selector-max-combinators"                          : [
            1,
            {
                "severity": "warning"
            }
        ],
        "selector-max-compound-selectors"                   : [
            3,
            {
                "severity": "warning"
            }
        ],
        "selector-max-empty-lines"                          : [
            0,
            {
                "severity": "error"
            }
        ],
        "selector-max-id"                                   : [
            1,
            {
                "severity": "warning"
            }
        ],
        "selector-max-pseudo-class"                         : [
            2,
            {
                "severity": "warning"
            }
        ],
        "selector-max-specificity"                          : [
            "0,2,0",
            {
                "ignoreSelectors": [],
                "severity"       : "warning"
            }
        ],
        "selector-max-type"                                 : [
            1,
            {
                "ignore"     : [],
                "ignoreTypes": [],
                "severity"   : "warning"
            }
        ],
        "selector-max-universal"                            : [
            2,
            {
                "severity": "warning"
            }
        ],
        "selector-nested-pattern"                           : [
            null,
            {
                "severity": "error"
            }
        ],
        "selector-no-qualifying-type"                       : [
            true,
            {
                "ignore"  : [],
                "severity": "warning"
            }
        ],
        "selector-no-vendor-prefix"                         : [
            true,
            {
                "ignoreSelectors": [],
                "severity"       : "warning"
            }
        ],
        "selector-pseudo-class-blacklist"                   : [
            [],
            {
                "severity": "error"
            }
        ],
        "selector-pseudo-class-case"                        : [
            "lower",
            {
                "severity": "error"
            }
        ],
        "selector-pseudo-class-no-unknown"                  : [
            true,
            {
                "ignorePseudoClasses": [],
                "severity"           : "error"
            }
        ],
        "selector-pseudo-class-parentheses-space-inside"    : [
            "never",
            {
                "severity": "error"
            }
        ],
        "selector-pseudo-class-whitelist"                   : [
            null,
            {
                "severity": "error"
            }
        ],
        "selector-pseudo-element-blacklist"                 : [
            [],
            {
                "severity": "error"
            }
        ],
        "selector-pseudo-element-case"                      : [
            "lower",
            {
                "severity": "error"
            }
        ],
        "selector-pseudo-element-colon-notation"            : [
            "double",
            {
                "severity": "error"
            }
        ],
        "selector-pseudo-element-no-unknown"                : [
            true,
            {
                "ignorePseudoElements": [],
                "severity"            : "error"
            }
        ],
        "selector-pseudo-element-whitelist"                 : [
            null,
            {
                "severity": "error"
            }
        ],
        "selector-type-case"                                : [
            "lower",
            {
                "ignoreTypes": [],
                "severity"   : "error"
            }
        ],
        "selector-type-no-unknown"                          : [
            true,
            {
                "ignore"          : [],
                "ignoreNamespaces": [],
                "ignoreTypes"     : [],
                "severity"        : "error"
            }
        ],
        "selector-list-comma-newline-after"                 : [
            "always",
            {
                "severity": "error"
            }
        ],
        "selector-list-comma-newline-before"                : [
            "never-multi-line",
            {
                "severity": "error"
            }
        ],
        "selector-list-comma-space-after"                   : [
            "always-single-line",
            {
                "severity": "error"
            }
        ],
        "selector-list-comma-space-before"                  : [
            "never",
            {
                "severity": "error"
            }
        ],
        "rule-empty-line-before"                            : [
            "always",
            {
                "except"  : [
                    "first-nested"
                ],
                "ignore"  : [
                    "after-comment"
                ],
                "severity": "error"
            }
        ],
        "media-feature-colon-space-after"                   : [
            "always",
            {
                "severity": "error"
            }
        ],
        "media-feature-colon-space-before"                  : [
            "never",
            {
                "severity": "error"
            }
        ],
        "media-feature-name-blacklist"                      : [
            [],
            {
                "severity": "error"
            }
        ],
        "media-feature-name-case"                           : [
            "lower",
            {
                "severity": "error"
            }
        ],
        "media-feature-name-no-unknown"                     : [
            true,
            {
                "ignoreMediaFeatureNames": [],
                "severity"               : "error"
            }
        ],
        "media-feature-name-no-vendor-prefix"               : [
            true,
            {
                "severity": "warning"
            }
        ],
        "media-feature-name-value-whitelist"                : [
            null,
            {
                "severity": "error"
            }
        ],
        "media-feature-name-whitelist"                      : [
            null,
            {
                "severity": "error"
            }
        ],
        "media-feature-parentheses-space-inside"            : [
            "never",
            {
                "severity": "error"
            }
        ],
        "media-feature-range-operator-space-after"          : [
            "always",
            {
                "severity": "error"
            }
        ],
        "media-feature-range-operator-space-before"         : [
            "always",
            {
                "severity": "error"
            }
        ],
        "custom-media-pattern"                              : [
            null,
            {
                "severity": "error"
            }
        ],
        "media-query-list-comma-newline-after"              : [
            "always-multi-line",
            {
                "severity": "error"
            }
        ],
        "media-query-list-comma-newline-before"             : [
            "never-multi-line",
            {
                "severity": "error"
            }
        ],
        "media-query-list-comma-space-after"                : [
            "always-single-line",
            {
                "severity": "error"
            }
        ],
        "media-query-list-comma-space-before"               : [
            "never",
            {
                "severity": "error"
            }
        ],
        "at-rule-blacklist"                                 : [
            [],
            {
                "severity": "error"
            }
        ],
        "at-rule-empty-line-before"                         : [
            "always",
            {
                "except"       : [
                    "blockless-after-same-name-blockless",
                    "first-nested"
                ],
                "ignore"       : [
                    "after-comment"
                ],
                "ignoreAtRules": [],
                "severity"     : "error"
            }
        ],
        "at-rule-name-case"                                 : [
            "lower",
            {
                "severity": "error"
            }
        ],
        "at-rule-name-newline-after"                        : [
            null,
            {
                "severity": "error"
            }
        ],
        "at-rule-name-space-after"                          : [
            "always",
            {
                "severity": "error"
            }
        ],
        "at-rule-no-unknown"                                : [
            true,
            {
                "ignoreAtRules": [],
                "severity"     : "error"
            }
        ],
        "at-rule-no-vendor-prefix"                          : [
            true,
            {
                "severity": "warning"
            }
        ],
        "at-rule-property-requirelist"                      : [
            {},
            {
                "severity": "error"
            }
        ],
        "at-rule-semicolon-newline-after"                   : [
            "always",
            {
                "severity": "error"
            }
        ],
        "at-rule-semicolon-space-before"                    : [
            "never",
            {
                "severity": "error"
            }
        ],
        "at-rule-whitelist"                                 : [
            null,
            {
                "severity": "error"
            }
        ],
        "comment-empty-line-before"                         : [
            "always",
            {
                "except"  : [
                    "first-nested"
                ],
                "ignore"  : [],
                "severity": "error"
            }
        ],
        "comment-no-empty"                                  : [
            true,
            {
                "severity": "error"
            }
        ],
        "comment-whitespace-inside"                         : [
            "always",
            {
                "severity": "error"
            }
        ],
        "comment-word-blacklist"                            : [
            [],
            {
                "severity": "error"
            }
        ],
        "max-nesting-depth"                                 : [
            2,
            {
                "ignore"       : [
                    "blockless-at-rules"
                ],
                "ignoreAtRules": [],
                "severity"     : "warning"
            }
        ],
        "indentation"                                       : [
            4,
            {
                "baseIndentLevel"   : 1,
                "indentInsideParens": "once-at-root-twice-in-block",
                "except"            : [],
                "ignore"            : [],
                "indentClosingBrace": false,
                "severity"          : "error"
            }
        ],
        "max-empty-lines"                                   : [
            1,
            {
                "ignore"  : [],
                "severity": "error"
            }
        ],
        "max-line-length"                                   : [
            120,
            {
                "ignore"       : [],
                "ignorePattern": [],
                "severity"     : "error"
            }
        ],
        "no-descending-specificity"                         : [
            true,
            {
                "severity": "error"
            }
        ],
        "no-duplicate-at-import-rules"                      : [
            true,
            {
                "severity": "error"
            }
        ],
        "no-duplicate-selectors"                            : [
            true,
            {
                "disallowInList": false,
                "severity"      : "error"
            }
        ],
        "no-empty-first-line"                               : [
            true,
            {
                "severity": "error"
            }
        ],
        "no-empty-source"                                   : [
            true,
            {
                "severity": "error"
            }
        ],
        "no-eol-whitespace"                                 : [
            true,
            {
                "ignore"  : [],
                "severity": "error"
            }
        ],
        "no-extra-semicolons"                               : [
            true,
            {
                "severity": "error"
            }
        ],
        "no-invalid-double-slash-comments"                  : [
            true,
            {
                "severity": "error"
            }
        ],
        "no-missing-end-of-source-newline"                  : [
            true,
            {
                "severity": "error"
            }
        ],
        "no-unknown-animations"                             : [
            true,
            {
                "severity": "error"
            }
        ]
    }
};
