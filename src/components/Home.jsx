import React from "react";
import useStyle from "./ThemaConfi";
import { Typography, Hidden ,createMuiTheme,responsiveFontSizes,MuiThemeProvider} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const Home = (props) => {
  const classes = useStyle();

let theme=createMuiTheme()
theme=responsiveFontSizes(theme)

  return (
    <Grid container>
      <div className={classes.content} >
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <div className={classes.text}>
            <MuiThemeProvider theme={theme}>
            <Typography
              variant="h2"
              gutterBottom
              style={{ fontFamily: "fantasy", letterSpacing: "11px" }}
            >
              Laura Giraldo
            </Typography>
            </MuiThemeProvider>

            <Hidden only="xs">
            <MuiThemeProvider theme={theme}>
              <Typography
                variant="h6"
                className={classes.parraf}
       
              >
                Inspirando y transformando vidas.
              </Typography>
              </MuiThemeProvider>
              <div className={classes.cuadrado}>
              <MuiThemeProvider theme={theme}>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{
                    fontFamily: "fantasy",
                    letterSpacing: "6px",
              
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  Construyendo un legado
                </Typography>
                </MuiThemeProvider>
              </div>
            </Hidden>
          </div>
        </Grid>
        </div>
    </Grid>
   
  );
};

export default Home;
