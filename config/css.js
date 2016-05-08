'use strict';

module.exports = {
    "extends": [
        "./rule/strict"
    ].map(require.resolve)
};
