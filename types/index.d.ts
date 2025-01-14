import { ReactNode } from "react";

export type Locale = "en" | "es" | "id" | "zh" | "ko" | "vi";

export type BrandingOptions = {
    company: {
        name: string;
    };
    defaultLocale: Locale;
    auth: {
        showRegionSelect: boolean;
    };
    policies: {
        help?: URL;
        refund?: URL;
        termsAndConditions: URL;
        privacy: URL;
    };
    webpack: {
        html: {
            // HTMLWebpackPlugin only accepts a flat options object (for any custom properties)
            companyName: string;
            favicon: string;
            meta: {
                author: string;
                "og:image": {
                    property: "og:image";
                    // og:image must be a fully qualified URL
                    content: string;
                };
            };
        };
        resolve: {
            alias: {
                "@branding": string;
            };
        };
    };
};

export type PrivacyVariant = "link" | "popup";

export type Brands = "KIDSLOOP" | "RUMAH_KISAH" | "AKADEMIMU";

export interface TypographyProps {
    children: ReactNode;
}
