'use strict';

module.exports = {
    "extends"    : [],
    "plugins"    : [],
    "ignoreFiles": [],
    "rules"      : {
        "color-hex-case"                                   : [
            "lower",
            {
                "severity": "error"
            }
        ],
        "color-hex-length"                                 : [
            "short",
            {
                "severity": "error"
            }
        ],
        "color-named"                                      : [
            "always-where-possible",
            {
                "severity": "error"
            }
        ],
        "color-no-hex"                                     : [
            null,
            {
                "severity": "error"
            }
        ],
        "color-no-invalid-hex"                             : [
            true,
            {
                "severity": "error"
            }
        ],
        "font-family-name-quotes"                          : [
            "single-where-recommended",
            {
                "severity": "error"
            }
        ],
        "font-weight-notation"                             : [
            "named-where-possible",
            {
                "ignore"  : [],
                "severity": "error"
            }
        ],
        "function-blacklist"                               : [
            null,
            {
                "severity": "error"
            }
        ],
        "function-calc-no-unspaced-operator"               : [
            true,
            {
                "severity": "error"
            }
        ],
        "function-comma-newline-after"                     : [
            "always-multi-line",
            {
                "severity": "error"
            }
        ],
        "function-comma-newline-before"                    : [
            "never-multi-line",
            {
                "severity": "error"
            }
        ],
        "function-comma-space-after"                       : [
            "always",
            {
                "severity": "error"
            }
        ],
        "function-comma-space-before"                      : [
            "never",
            {
                "severity": "error"
            }
        ],
        "function-linear-gradient-no-nonstandard-direction": [
            true,
            {
                "severity": "error"
            }
        ],
        "function-parentheses-newline-inside"              : [
            "never-multi-line",
            {
                "severity": "error"
            }
        ],
        "function-parentheses-space-inside"                : [
            "never-single-line",
            {
                "severity": "error"
            }
        ],
        "function-url-quotes"                              : [
            "none",
            {
                "severity": "error"
            }
        ],
        "function-whitelist"                               : [
            null,
            {
                "severity": "error"
            }
        ],
        "function-whitespace-after"                        : [
            "always",
            {
                "severity": "error"
            }
        ],
        "number-leading-zero"                              : [
            "never",
            {
                "severity": "error"
            }
        ],
        "number-max-precision"                             : [
            5,
            {
                "severity": "error"
            }
        ],
        "number-no-trailing-zeros"                         : [
            true,
            {
                "severity": "error"
            }
        ],
        "number-zero-length-no-unit"                       : [
            true,
            {
                "severity": "error"
            }
        ],
        "string-no-newline"                                : [
            true,
            {
                "severity": "error"
            }
        ],
        "string-quotes"                                    : [
            "single",
            {
                "severity": "error"
            }
        ],
        "time-no-imperceptible"                            : [
            true,
            {
                "severity": "error"
            }
        ],
        "unit-blacklist"                                   : [
            null,
            {
                "severity": "error"
            }
        ],
        "unit-whitelist"                                   : [
            null,
            {
                "severity": "error"
            }
        ],
        "value-no-vendor-prefix"                           : [
            true,
            {
                "severity": "error"
            }
        ],
        "value-list-comma-newline-after"                   : [
            "always-multi-line",
            {
                "severity": "error"
            }
        ],
        "value-list-comma-newline-before"                  : [
            "never-multi-line",
            {
                "severity": "error"
            }
        ],
        "value-list-comma-space-after"                     : [
            "always",
            {
                "severity": "error"
            }
        ],
        "value-list-comma-space-before"                    : [
            "never",
            {
                "severity": "error"
            }
        ],
        "custom-property-no-outside-root"                  : [
            true,
            {
                "severity": "error"
            }
        ],
        "custom-property-pattern"                          : [
            null,
            {
                "severity": "error"
            }
        ],
        "property-blacklist"                               : [
            null,
            {
                "severity": "error"
            }
        ],
        "property-no-vendor-prefix"                        : [
            true,
            {
                "severity": "error"
            }
        ],
        "property-unit-blacklist"                          : [
            null,
            {
                "severity": "error"
            }
        ],
        "property-unit-whitelist"                          : [
            null,
            {
                "severity": "error"
            }
        ],
        "property-value-blacklist"                         : [
            null,
            {
                "severity": "error"
            }
        ],
        "property-value-whitelist"                         : [
            null,
            {
                "severity": "error"
            }
        ],
        "property-whitelist"                               : [
            null,
            {
                "severity": "error"
            }
        ],
        "declaration-bang-space-after"                     : [
            "always",
            {
                "severity": "error"
            }
        ],
        "declaration-bang-space-before"                    : [
            "never",
            {
                "severity": "error"
            }
        ],
        "declaration-colon-newline-after"                  : [
            "always-multi-line",
            {
                "severity": "error"
            }
        ],
        "declaration-colon-space-after"                    : [
            "always",
            {
                "severity": "error"
            }
        ],
        "declaration-colon-space-before"                   : [
            "never",
            {
                "severity": "error"
            }
        ],
        "declaration-no-important"                         : [
            true,
            {
                "severity": "warning"
            }
        ],
        "declaration-block-no-duplicate-properties"        : [
            true,
            {
                "severity": "warning"
            }
        ],
        "declaration-block-no-shorthand-property-overrides": [
            true,
            {
                "severity": "error"
            }
        ],
        "declaration-block-properties-order"               : [
            null,
            {
                "unspecified": "bottomAlphabetical",
                "severity"   : "error"
            }
        ],
        "declaration-block-semicolon-newline-after"        : [
            "always",
            {
                "severity": "error"
            }
        ],
        "declaration-block-semicolon-newline-before"       : [
            "never-multi-line",
            {
                "severity": "error"
            }
        ],
        "declaration-block-semicolon-space-after"          : [
            "always-single-line",
            {
                "severity": "error"
            }
        ],
        "declaration-block-semicolon-space-before"         : [
            "never",
            {
                "severity": "error"
            }
        ],
        "declaration-block-single-line-max-declarations"   : [
            1,
            {
                "severity": "error"
            }
        ],
        "declaration-block-trailing-semicolon"             : [
            "always",
            {
                "severity": "error"
            }
        ],
        "block-closing-brace-newline-after"                : [
            "always",
            {
                "ignoreAtRules": [],
                "severity"     : "error"
            }
        ],
        "block-closing-brace-newline-before"               : [
            "always",
            {
                "severity": "error"
            }
        ],
        "block-closing-brace-space-after"                  : [
            "always-single-line",
            {
                "severity": "error"
            }
        ],
        "block-closing-brace-space-before"                 : [
            "always-single-line",
            {
                "severity": "error"
            }
        ],
        "block-no-empty"                                   : [
            true,
            {
                "severity": "warning"
            }
        ],
        "block-no-single-line"                             : [
            true,
            {
                "severity": "error"
            }
        ],
        "block-opening-brace-newline-after"                : [
            "always",
            {
                "severity": "error"
            }
        ],
        "block-opening-brace-newline-before"               : [
            "always",
            {
                "ignoreAtRules": [],
                "severity"     : "error"
            }
        ],
        "block-opening-brace-space-after"                  : [
            "always-single-line",
            {
                "severity": "error"
            }
        ],
        "block-opening-brace-space-before"                 : [
            "always-single-line",
            {
                "ignoreAtRules": [],
                "severity"     : "error"
            }
        ],
        "selector-class-pattern"                           : [
            "^[a-z][-_a-z0-9]*$",
            {
                "resolveNestedSelectors": true,
                "severity"              : "error"
            }
        ],
        "selector-combinator-space-after"                  : [
            "always",
            {
                "severity": "error"
            }
        ],
        "selector-combinator-space-before"                 : [
            "always",
            {
                "severity": "error"
            }
        ],
        "selector-id-pattern"                              : [
            "^[a-z][-_a-z0-9]*$",
            {
                "severity": "error"
            }
        ],
        "selector-max-specificity"                         : [
            "0,2,0",
            {
                "severity": "warning"
            }
        ],
        "selector-no-attribute"                            : [
            null,
            {
                "severity": "error"
            }
        ],
        "selector-no-combinator"                           : [
            null,
            {
                "severity": "error"
            }
        ],
        "selector-no-id"                                   : [
            true,
            {
                "severity": "warning"
            }
        ],
        "selector-no-type"                                 : [
            true,
            {
                "ignore"  : [
                    "descendant"
                ],
                "severity": "error"
            }
        ],
        "selector-no-universal"                            : [
            true,
            {
                "severity": "warning"
            }
        ],
        "selector-no-vendor-prefix"                        : [
            true,
            {
                "severity": "error"
            }
        ],
        "selector-pseudo-element-colon-notation"           : [
            "double",
            {
                "severity": "error"
            }
        ],
        "selector-root-no-composition"                     : [
            true,
            {
                "severity": "error"
            }
        ],
        "selector-type-case"                               : [
            "lower",
            {
                "severity": "error"
            }
        ],
        "selector-list-comma-newline-after"                : [
            "always",
            {
                "severity": "error"
            }
        ],
        "selector-list-comma-newline-before"               : [
            "never-multi-line",
            {
                "severity": "error"
            }
        ],
        "selector-list-comma-space-after"                  : [
            "always-single-line",
            {
                "severity": "error"
            }
        ],
        "selector-list-comma-space-before"                 : [
            "never",
            {
                "severity": "error"
            }
        ],
        "root-no-standard-properties"                      : [
            true,
            {
                "severity": "error"
            }
        ],
        "rule-nested-empty-line-before"                    : [
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
        "rule-non-nested-empty-line-before"                : [
            "always-multi-line",
            {
                "ignore"  : [
                    "after-comment"
                ],
                "severity": "error"
            }
        ],
        "media-feature-colon-space-after"                  : [
            "always",
            {
                "severity": "error"
            }
        ],
        "media-feature-colon-space-before"                 : [
            "never",
            {
                "severity": "error"
            }
        ],
        "media-feature-name-no-vendor-prefix"              : [
            true,
            {
                "severity": "error"
            }
        ],
        "media-feature-no-missing-punctuation"             : [
            true,
            {
                "severity": "error"
            }
        ],
        "media-feature-range-operator-space-after"         : [
            "always",
            {
                "severity": "error"
            }
        ],
        "media-feature-range-operator-space-before"        : [
            "always",
            {
                "severity": "error"
            }
        ],
        "custom-media-pattern"                             : [
            null,
            {
                "severity": "error"
            }
        ],
        "media-query-parentheses-space-inside"             : [
            "never",
            {
                "severity": "error"
            }
        ],
        "media-query-list-comma-newline-after"             : [
            "always-multi-line",
            {
                "severity": "error"
            }
        ],
        "media-query-list-comma-newline-before"            : [
            "never-multi-line",
            {
                "severity": "error"
            }
        ],
        "media-query-list-comma-space-after"               : [
            "always-single-line",
            {
                "severity": "error"
            }
        ],
        "media-query-list-comma-space-before"              : [
            "never",
            {
                "severity": "error"
            }
        ],
        "at-rule-empty-line-before"                        : [
            "always",
            {
                "except"  : [
                    "blockless-group",
                    "first-nested"
                ],
                "ignore"  : [
                    "after-comment"
                ],
                "severity": "error"
            }
        ],
        "at-rule-no-vendor-prefix"                         : [
            true,
            {
                "severity": "error"
            }
        ],
        "at-rule-semicolon-newline-after"                  : [
            // string: "always"
            "always",
            {
                "severity": "error"
            }
        ],
        "comment-empty-line-before"                        : [
            "always",
            {
                "except"  : [
                    "first-nested"
                ],
                "ignore"  : [],
                "severity": "error"
            }
        ],
        "comment-whitespace-inside"                        : [
            "always",
            {
                "severity": "error"
            }
        ],
        "indentation"                                      : [
            4,
            {
                "except"               : [],
                "ignore"               : [],
                "hierarchicalSelectors": true,
                "severity"             : "error"
            }
        ],
        "max-empty-lines"                                  : [
            1,
            {
                "severity": "error"
            }
        ],
        "max-line-length"                                  : [
            120,
            {
                "ignore"  : [],
                "severity": "error"
            }
        ],
        "max-nesting-depth"                                : [
            2,
            {
                "ignore"  : [
                    "at-rules-without-declaration-blocks"
                ],
                "severity": "warning"
            }
        ],
        "no-browser-hacks"                                 : [
            true,
            {
                "severity": "error"
            }
        ],
        "no-descending-specificity"                        : [
            true,
            {
                "severity": "error"
            }
        ],
        "no-duplicate-selectors"                           : [
            true,
            {
                "severity": "error"
            }
        ],
        "no-eol-whitespace"                                : [
            true,
            {
                "severity": "error"
            }
        ],
        "no-indistinguishable-colors"                      : [
            true,
            {
                "threshold": 3,
                "ignore"   : [],
                "whitelist": [],
                "severity" : "warning"
            }
        ],
        "no-invalid-double-slash-comments"                 : [
            true,
            {
                "severity": "error"
            }
        ],
        "no-missing-eof-newline"                           : [
            true,
            {
                "severity": "error"
            }
        ],
        "no-unknown-animations"                            : [
            true,
            {
                "severity": "error"
            }
        ],
        "no-unsupported-browser-features"                  : [
            true,
            {
                "ignore"  : [],
                "severity": "warning"
            }
        ],
        "stylelint-disable-reason"                         : [
            "always-before",
            {
                "severity": "error"
            }
        ]
    }
};
