import {
    Grid,
    Typography
} from "@mui/material";

import { TypographyProps } from "~types";
import React from "react";

export default function Paragraph(props: TypographyProps) {
    return (
        <Grid item>
            <Typography variant="caption">{props.children}</Typography>
        </Grid>
    );
}
