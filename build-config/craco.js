/* eslint-disable no-param-reassign */

module.exports = {
    plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
            webpackConfig.watchOptions.ignored = [
                '**/node_modules'
            ];

            return webpackConfig;
        },
    },
};
