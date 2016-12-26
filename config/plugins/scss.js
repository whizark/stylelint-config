'use strict';

module.exports = {
    "plugins": [
        "stylelint-scss"
    ],
    "rules"  : {
        // @-else
        "scss/at-else-closing-brace-newline-after": [
            "always-last-in-chain",
            {
                "severity": "error"
            }
        ],
        "scss/at-else-closing-brace-space-after"  : [
            "always-intermediate",
            {
                "severity": "error"
            }
        ],
        "scss/at-else-empty-line-before"          : [
            "never",
            {
                "severity": "error"
            }
        ],

        // @-extend
        "scss/at-extend-no-missing-placeholder": [
            true,
            {
                "severity": "error"
            }
        ],

        // @-function
        "scss/at-function-pattern": [
            ".+",
            {
                "severity": "error"
            }
        ],

        // @-if
        "scss/at-if-closing-brace-newline-after": [
            "always-last-in-chain",
            {
                "severity": "error"
            }
        ],
        "scss/at-if-closing-brace-space-after"  : [
            "always-intermediate",
            {
                "severity": "error"
            }
        ],

        // @-import
        "scss/at-import-no-partial-leading-underscore": [
            true,
            {
                "severity": "error"
            }
        ],
        "scss/at-import-partial-extension-blacklist"  : [
            ["scss"],
            {
                "severity": "error"
            }
        ],
        "scss/at-import-partial-extension-whitelist"  : [
            null,
            {
                "severity": "error"
            }
        ],

        // @-mixin
        "scss/at-mixin-argumentless-call-parentheses": [
            "always",
            {
                "severity": "error"
            }
        ],
        "scss/at-mixin-pattern"                      : [
            ".+",
            {
                "severity": "error"
            }
        ],

        // $-variable
        "scss/dollar-variable-colon-newline-after"     : [
            null,
            {
                "severity": "error"
            }
        ],
        "scss/dollar-variable-colon-space-after"       : [
            "always",
            {
                "severity": "error"
            }
        ],
        "scss/dollar-variable-colon-space-before"      : [
            "never",
            {
                "severity": "error"
            }
        ],
        "scss/dollar-variable-empty-line-before"       : [
            "always",
            {
                "except"  : [
                    "first-nested",
                    "after-comment",
                    "after-dollar-variable"
                ],
                "ignore"  : [
                    "inside-single-line-block"
                ],
                "severity": "error"
            }
        ],
        "scss/dollar-variable-no-missing-interpolation": [
            true,
            {
                "severity": "error"
            }
        ],
        "scss/dollar-variable-pattern"                 : [
            ".+",
            {
                "severity": "error"
            }
        ],

        // %-placeholder
        "scss/percent-placeholder-pattern": [
            ".+",
            {
                "severity": "error"
            }
        ],

        // //-comment
        "scss/double-slash-comment-empty-line-before": [
            "always",
            {
                "except"  : [
                    "first-nested"
                ],
                "ignore"  : [],
                "severity": "error"
            }
        ],
        "scss/double-slash-comment-inline"           : [
            "never",
            {
                "ignore"  : [
                    "stylelint-commands"
                ],
                "severity": "warn"
            }
        ],
        "scss/double-slash-comment-whitespace-inside": [
            "always",
            {
                "severity": "error"
            }
        ],

        // Declaration
        "scss/declaration-nested-properties"                  : [
            null,
            {
                "except"  : [
                    "only-of-namespace"
                ],
                "severity": "error"
            }
        ],
        "scss/declaration-nested-properties-no-divided-groups": [
            true,
            {
                "severity": "error"
            }
        ],

        // Media feature
        "scss/media-feature-value-dollar-variable": [
            null,
            {
                "severity": "error"
            }
        ],

        // Operator
        "scss/operator-no-newline-after" : [
            true,
            {
                "severity": "error"
            }
        ],
        "scss/operator-no-newline-before": [
            true,
            {
                "severity": "error"
            }
        ],
        "scss/operator-no-unspaced"      : [
            true,
            {
                "severity": "error"
            }
        ],

        // Partial
        "scss/partial-no-import": [
            null,
            {
                "severity": "error"
            }
        ],

        // Selector
        "scss/selector-no-redundant-nesting-selector": [
            true,
            {
                "severity": "error"
            }
        ]
    }
};
