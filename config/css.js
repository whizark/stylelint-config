'use strict';

module.exports = {
    "extends": [
        "./rules/strict"
    ].map(require.resolve)
};
