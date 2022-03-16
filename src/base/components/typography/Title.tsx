import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { TypographyProps } from "~types";
import React from "react";

export default function Title(props: TypographyProps) {
    return (
        <Grid item>
            <Typography variant="h6">{props.children}</Typography>
        </Grid>
    );
}
