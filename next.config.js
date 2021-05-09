const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
    images: {
        domains: ["michalantczakblogresources.s3.eu-central-1.amazonaws.com"],
    },
    pwa: {
        dest: "public",
        runtimeCaching,
    },
});
