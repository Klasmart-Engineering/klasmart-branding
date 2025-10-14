import { BrandingOptions } from "~types";

const config: BrandingOptions = {
    company: {
        name: `Akademimu`,
    },
    defaultLocale: `id`,
    policies: {
        privacy: new URL(`https://akademimu.com/kl-privacy-policy/`),
        termsAndConditions: new URL(`https://akademimu.com/kl-terms-and-conditions`),
    },
    auth: {
        showRegionSelect: false,
    },
    webpack: {
        html: {
            companyName: `Akademimu`,
            favicon:
                `./node_modules/@klasmart-engineering/klasmart-branding/dist/brands/akademimu/assets/img/primary_logo.svg`,
            meta: {
                author: `Akademimu`,
                "og:image": {
                    property: `og:image`,
                    content:
                        `https://klid-akd.s3.ap-southeast-1.amazonaws.com/50pxlogo-sang-surya-akademimu-convert.png`,
                },
            },
        },
        resolve: {
            alias: {
                "@branding":
                    `@klasmart-engineering/klasmart-branding/dist/brands/akademimu`,
            },
        },
    },
};

export default config;
