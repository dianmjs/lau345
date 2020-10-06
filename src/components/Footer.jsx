import React from "react";
import useStyle from "./ThemaConfi";

const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.footer}>
      <div className={classes.letterfooter}>
        Copyright © 2020- Diseño Web realizado por
        <span>
          <b> | Diana Jaramillo</b>
        </span>
      </div>
    </div>
  );
};

export default Footer;
