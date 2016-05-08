'use strict';

module.exports = {
    "extends": [
        "./rules/strict",
        "./syntax/scss"
    ].map(require.resolve)
};
