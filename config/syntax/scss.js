'use strict';

module.exports = {
    "rules": {
        "block-closing-brace-newline-after" : [
            "always",
            {
                "ignoreAtRules": [
                    "if",
                    "else"
                ],
                "severity"     : "error"
            }
        ],
        "block-opening-brace-newline-before": [
            // Prevents errors that `@if` directive causes.
            //
            // e.g.
            // @if true {
            //         ^ `always` causes an error here.
            // }
            "always-single-line",
            {
                "severity": "error"
            }
        ],
        "at-rule-empty-line-before"         : [
            "always",
            {
                "except"       : [
                    "blockless-after-same-name-blockless",
                    "blockless-group",
                    "first-nested"
                ],
                "ignore"       : [
                    "after-comment"
                ],
                "ignoreAtRules": [
                    "else"
                ],
                "severity"     : "error"
            }
        ],
        "at-rule-no-unknown"                : [
            true,
            {
                "ignoreAtRules": [
                    "extend",
                    "at-root",
                    "debug",
                    "warn",
                    "error",
                    "if",
                    "else",
                    "for",
                    "each",
                    "while",
                    "mixin",
                    "include",
                    "content",
                    "function",
                    "return"
                ],
                "severity"     : "error"
            }
        ],
        "indentation"                       : [
            4,
            {
                "indentInsideParens": "once-at-root-twice-in-block",
                "except"            : [],
                "ignore"            : [
                    "inside-parens"
                ],
                "indentClosingBrace": false,
                "severity"          : "error"
            }
        ],
        "no-browser-hacks"                  : null
    }
};
