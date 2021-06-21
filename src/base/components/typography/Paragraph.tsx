import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { TypographyProps } from "~types";
import React from "react";

export default function Paragraph(props: TypographyProps) {
    return (
        <Grid item>
            <Typography variant="caption">{props.children}</Typography>
        </Grid>
    );
}
