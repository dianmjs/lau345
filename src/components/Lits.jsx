import React from "react";
import useStyle from "./ThemaConfi";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Divider, Typography } from "@material-ui/core";

const Lits = (props) => {
  const classes = useStyle();
  return (
    <div>
      <List
        component="nav"
        aria-label="secondary mailbox folders"
        className={classes.list}
      >
        <a href="#home" style={{ color: "black", textDecoration: "none" }}>
          <ListItem button>
            <ListItemText
              disableTypography
              primary={
                <Typography type="body1" className={classes.colortext}>
                  Inicio
                </Typography>
              }
            />
          </ListItem>
        </a>
        <Divider />
        <a href="#training" style={{ color: "black", textDecoration: "none" }}>
          <ListItem button>
            <ListItemText
              disableTypography
              primary={
                <Typography type="body1" className={classes.colortext}>
                  Testimonios
                </Typography>
              }
            />
          </ListItem>
        </a>
        <Divider />
        <a href="#products" style={{ color: "black", textDecoration: "none" }}>
          <ListItem button>
            <ListItemText
              disableTypography
              primary={
                <Typography type="body1" className={classes.colortext}>
                  Productos
                </Typography>
              }
            />
          </ListItem>
        </a>
        <Divider />
      </List>
    </div>
  );
};

export default Lits;
