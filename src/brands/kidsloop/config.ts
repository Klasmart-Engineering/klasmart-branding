import { BrandingOptions } from "~types";

const config: BrandingOptions = {
    company: {
        name: "KidsLoop",
        officialName: "KidsLoop Limited",
        website: new URL("https://www.kidsloop.net/"),
    },
    defaultLocale: "en",
    policies: {
        refund: new URL("https://kidsloop.net/en/policies/return-policy/"),
        privacy: new URL("https://www.kidsloop.net/policies/terms/"),
        termsAndConditions: new URL(
            "https://www.kidsloop.net/policies/privacy-notice/"
        ),
    },
    auth: {
        showRegionSelect: true,
    },
    webpack: {
        resolve: {
            alias: { "@branding": "kidsloop-branding/dist/brands/kidsloop" },
        },
    },
};

export default config;
