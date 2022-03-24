import config from "../config";
import Link,
{ LinkProps } from "@mui/material/Link";
import { PrivacyVariant } from "~types";
import React from "react";

type IPrivacyPolicy = React.FC<LinkProps> & {
    variant: PrivacyVariant;
};

const PrivacyPolicy: IPrivacyPolicy = (props) => {
    return (
        <Link
            href={config.policies.privacy.toString()}
            target="_blank"
            rel="noopener"
            {...props}
        />
    );
};

PrivacyPolicy.variant = `link`;
export default PrivacyPolicy;
