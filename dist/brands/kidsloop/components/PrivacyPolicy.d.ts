import React from "react";
import { PrivacyVariant } from "~types";
declare type IPrivacyPolicy = React.FC & {
    variant: PrivacyVariant;
};
declare const PrivacyPolicy: IPrivacyPolicy;
export default PrivacyPolicy;
