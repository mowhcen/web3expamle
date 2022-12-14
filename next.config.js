const { i18n } = require("./next-i18next.config");
const { resolve } = require("path");

/**
 * @type {import('next').NextConfig}
 */

module.exports = {
    i18n,
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos",
            },
        ],
    },
    output: "standalone",
    webpack(config, context) {
        if (!context.isServer && context.dev) {
            const localesDir = resolve("public/locales");
            const { I18NextHMRPlugin } = require("i18next-hmr/plugin");
            config.plugins.push(new I18NextHMRPlugin({ localesDir }));
        }
        return config;
    },
};
