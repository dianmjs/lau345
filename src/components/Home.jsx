import React from "react";
import useStyle from "./ThemaConfi";
import { Typography, Hidden } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const Home = (props) => {
  const classes = useStyle();
  return (
    <Grid container>
      <div className={classes.content}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className={classes.text}>
            <Typography
              variant="h2"
              gutterBottom
              style={{ fontFamily: "fantasy", letterSpacing: "11px" }}
            >
              Laura Giraldo
            </Typography>
            <Hidden only="xs">
              <Typography
                variant="subtitle1"
                className={classes.parraf}
                style={{ fontSize: "24px" }}
              >
                Inspirando y transformando vidas.
              </Typography>
              <div className={classes.cuadrado}>
                <Typography
                  variant="h2"
                  gutterBottom
                  style={{
                    fontFamily: "fantasy",
                    letterSpacing: "6px",
                    fontSize: "26px",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  Construyendo un legado
                </Typography>
              </div>
            </Hidden>
          </div>
        </Grid>
      </div>
    </Grid>
  );
};

export default Home;
