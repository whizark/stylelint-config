'use strict';

const configs = [
    "./rules/strict",
    "./syntax/scss"
];

const plugins = [
    "./plugins/scss"
];

/**
 * Checks whether the specified plugins are installed.
 *
 * @param {string[]} plugins A list of plugin names to check.
 *
 * @returns {boolean} True if all plugins are installed, false otherwise.
 */
function pluginsInstalled(plugins) {
    for (const plugin of plugins) {
        try {
            require.resolve(plugin);
        } catch (err) {
            return false;
        }
    }

    return true;
}

for (const plugin of plugins) {
    const pluginConfig = require(plugin);

    if (typeof pluginConfig.plugins === 'undefined') {
        continue;
    }

    if (pluginsInstalled(pluginConfig.plugins)) {
        configs.push(plugin);
    }
}

module.exports = {
    "extends": configs.map(require.resolve)
};
