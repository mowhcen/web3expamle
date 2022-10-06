const HttpBackend = require("i18next-http-backend/cjs");
const path = require("path");
const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE || "fa";

module.exports = {
    i18n: {
        defaultLocale: defaultLocale,
        locales: [defaultLocale, "en"],
        localeDetection: false,
    },
    transSupportBasicHtmlNodes: true,
    localePath: path.resolve("./public/locales"),
    use: typeof window === "undefined" ? [] : [HttpBackend],
    serializeConfig: false,
};
