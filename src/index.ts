import { default as AkademimuConfig } from "./brands/akademimu/config";
import { default as KidsloopConfig } from "./brands/kidsloop/config";
import { default as RumahKisahConfig } from "./brands/rumahkisah/config";
import { BrandingError } from "./errors";
import { BrandingOptions } from "~types";
import Debug from "debug";

export { BrandingError };

const debug = Debug(`@klasmart-engineering/klasmart-branding`);

export function loadBrandingOptions (brand: string | undefined): BrandingOptions {
    switch (brand) {
    case `KIDSLOOP`:
        return KidsloopConfig;
    case `RUMAH_KISAH`:
        return RumahKisahConfig;
    case `AKADEMIMU`:
        return AkademimuConfig;
    case undefined:
        // eslint-disable-next-line testing-library/no-debugging-utils
        debug(`No brand specified, defaulting to Kidsloop`);
        return KidsloopConfig;
    default:
        throw new BrandingError(`Unrecognised brand ${brand}`);
    }
}
