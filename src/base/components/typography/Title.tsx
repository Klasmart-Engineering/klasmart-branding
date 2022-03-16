import {
    Grid,
    Typography
} from "@mui/material";

import { TypographyProps } from "~types";
import React from "react";

export default function Title(props: TypographyProps) {
    return (
        <Grid item>
            <Typography variant="h6">{props.children}</Typography>
        </Grid>
    );
}
