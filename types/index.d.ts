import { ReactNode } from "react";

export type Locale = "en" | "id" | "zh" | "ko" | "vi";

export type BrandingOptions = {
    company: {
        name: string;
        officialName: string;
        website: URL;
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
        resolve: {
            alias: {
                "@branding": string;
            };
        };
    };
};

export type PrivacyVariant = "link" | "popup";

export type Brands = "KIDSLOOP" | "RUMAH_KISAH";

export interface TypographyProps {
    children: ReactNode;
}
