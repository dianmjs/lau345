import React from "react";
import useStyle from "./ThemaConfi";
import { Drawer, Typography } from "@material-ui/core";
import Lits from "./Lits";

const Cajon = (props) => {
  const classes = useStyle();
  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
      anchor="left"
    >
      <div
        className={classes.offset}
        style={{ backgroundColor: "#ff7e67", color: "white" }}
      >
        <Typography
          variant="h6"
          color="initial"
          align="center"
          className={classes.menu}
        >
          Menu
        </Typography>
      </div>
      <Lits />
    </Drawer>
  );
};

export default Cajon;
