import Debug from "debug";

import { BrandingOptions } from "~types";
import { BrandingError } from "./errors";

import { default as KidsloopConfig } from "./brands/kidsloop/config";
import { default as RumahKisahConfig } from "./brands/rumahkisah/config";
import { default as AkademimuConfig } from "./brands/akademimu/config";

export { BrandingError };

const debug = Debug("kidsloop-branding");

export function loadBrandingOptions(
    brand: string | undefined
): BrandingOptions {
    switch (brand) {
        case "KIDSLOOP":
            return KidsloopConfig;
        case "RUMAH_KISAH":
            return RumahKisahConfig;
        case "AKADEMIMU":
            return AkademimuConfig;
        case undefined:
            debug("No brand specified, defaulting to Kidsloop");
            return KidsloopConfig;
        default:
            throw new BrandingError(`Unrecognised brand ${brand}`);
    }
}
