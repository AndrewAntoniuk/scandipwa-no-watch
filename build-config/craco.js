/* eslint-disable no-param-reassign */

module.exports = {
    plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {

            const newWebpackConfig = {
                ...webpackConfig,
                watchOptions: {
                    ignored: [
                        '**/node_modules'
                    ],
                },
            };

            return newWebpackConfig;
        },
    },
};
