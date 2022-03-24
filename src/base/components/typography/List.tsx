import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TypographyProps } from "~types";
import React from "react";

export default function List (props: TypographyProps) {
    return (
        <Grid container>
            <Grid
                item
                component="ul"
            >
                <Typography
                    variant="caption"
                    component="li"
                >
                    {props.children}
                </Typography>
            </Grid>
        </Grid>
    );
}
