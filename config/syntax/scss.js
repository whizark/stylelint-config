'use strict';

module.exports = {
    "rules": {
        "at-rule-no-unknown": [
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
        "no-browser-hacks"  : null
    }
};
