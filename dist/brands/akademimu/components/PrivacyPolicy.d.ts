import React from "react";
import { LinkProps } from "@mui/material";
import { PrivacyVariant } from "~types";
declare type IPrivacyPolicy = React.FC<LinkProps> & {
    variant: PrivacyVariant;
};
declare const PrivacyPolicy: IPrivacyPolicy;
export default PrivacyPolicy;
