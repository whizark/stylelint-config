'use strict';

module.exports = {
    "extends": [
        "./rule/strict",
        "./syntax/scss"
    ].map(require.resolve)
};
