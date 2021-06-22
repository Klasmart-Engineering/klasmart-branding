import { BrandingOptions } from "~types";

const config: BrandingOptions = {
    company: {
        name: "Rumah Kisah",
        officialName: "Rumah Kisah",
        website: new URL("https://rumahkisah.id/"),
    },
    defaultLocale: "id",
    policies: {
        privacy: new URL("https://rumahkisah.id/privacy-policy"),
        // TODO: update to correct URL once available
        termsAndConditions: new URL(
            "https://rumahkisah.id/terms-and-conditions"
        ),
    },
    auth: {
        showRegionSelect: false,
    },
    webpack: {
        html: {
            companyName: "Rumah Kisah",
            favicon:
                "./node_modules/kidsloop-branding/dist/brands/rumahkisah/assets/img/primary_logo.svg",
            meta: {
                author: "Rumah Kisah",
                "og:image": {
                    property: "og:image",
                    content:
                        "https://rumahkisah.id/wp-content/uploads/2020/08/logo-dark.svg",
                },
            },
        },
        resolve: {
            alias: {
                "@branding": "kidsloop-branding/dist/brands/rumahkisah",
            },
        },
    },
};

export default config;
