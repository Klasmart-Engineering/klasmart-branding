import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { TypographyProps } from "~types";
import React from "react";

export default function Paragraph(props: TypographyProps) {
    return (
        <Grid item>
            <Typography variant="caption">{props.children}</Typography>
        </Grid>
    );
}
