import React from "react";
import Button from "@material-ui/core/Button";
import useStyle from "./ThemaConfi";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Hidden, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const Header = (props) => {
  const classes = useStyle();

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <div className={classes.root}>
          <AppBar
            className={classes.appBar}
            style={{ backgroundColor: "#0000004f", boxShadow: "0 0 black" }}
          >
            <Toolbar>
              <Hidden only={["lg", "md", "sm"]}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={() => props.accionAbrir()}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  LauTrainer
                </Typography>
              </Hidden>
              <Hidden only="xs">
                <Typography variant="h6" className={classes.title}>
                  LauTrainer
                </Typography>

                <div className={classes.navbar}>
                  <a
                    href="#home"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <Button
                      variant="text"
                      color="inherit"
                      className={classes.navbar}
                    >
                      Inicio
                    </Button>
                  </a>
                  <a
                    href="#training"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <Button
                      variant="text"
                      color="inherit"
                      className={classes.navbar}
                    >
                      Testimonios
                    </Button>
                  </a>
                  <a
                    href="#products"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <Button
                      variant="text"
                      color="inherit"
                      className={classes.navbar}
                    >
                      Productos
                    </Button>
                  </a>
                </div>
              </Hidden>
            </Toolbar>
          </AppBar>
        </div>
      </Grid>
    </Grid>
  );
};

export default Header;
