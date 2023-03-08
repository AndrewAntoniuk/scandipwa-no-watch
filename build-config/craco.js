/* eslint-disable no-param-reassign */

module.exports = {
    plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
            webpackConfig.optimization.minimize = false;

            return webpackConfig;
        },
    },
};
