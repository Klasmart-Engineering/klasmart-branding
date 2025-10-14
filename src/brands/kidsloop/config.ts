import { BrandingOptions } from "~types";

const config: BrandingOptions = {
    company: {
        name: `KidsLoop`,
    },
    defaultLocale: `en`,
    policies: {
        help: new URL(`https://www.kidsloop.net/en/faq/`),
        refund: new URL(`https://kidsloop.net/en/policies/return-policy/`),
        privacy: new URL(`https://www.kidsloop.net/policies/terms/`),
        termsAndConditions: new URL(`https://www.kidsloop.net/policies/privacy-notice/`),
    },
    auth: {
        showRegionSelect: true,
    },
    webpack: {
        html: {
            companyName: `KidsLoop`,
            favicon: `./node_modules/@klasmart-engineering/klasmart-branding/dist/brands/kidsloop/assets/img/primary_logo.svg`,
            meta: {
                author: `KidsLoop Limited`,
                "og:image": {
                    property: `og:image`,
                    content: `https://www.kidsloop.net/wp-content/uploads/2020/09/Asset-1.svg`,
                },
            },
        },
        resolve: {
            alias: {
                "@branding": `@klasmart-engineering/klasmart-branding/dist/brands/kidsloop`,
            },
        },
    },
};

export default config;
