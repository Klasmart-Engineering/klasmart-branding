import React from "react";
import Link, { LinkProps } from "@material-ui/core/Link";
import { PrivacyVariant } from "~types";

import config from "../config";

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
        ></Link>
    );
};

PrivacyPolicy.variant = "link";
export default PrivacyPolicy;
