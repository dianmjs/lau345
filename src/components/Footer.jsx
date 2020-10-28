import { Grid } from "@material-ui/core";
import React from "react";
import useStyle from "./ThemaConfi";

const Footer = () => {
  const classes = useStyle();
  return (
    <Grid container>
    <div className={classes.footer}>
    <Grid item xs={12}>
      <div className={classes.letterfooter}>
        Copyright © 2020- Diseño Web realizado por
        <span>
          <b> | Diana Jaramillo</b>
        </span>
      </div>
      </Grid>
    </div>
    </Grid>
  );
};

export default Footer;
