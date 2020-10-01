import React from "react";
import useStyle from "./ThemaConfi";

const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.footerinfo}>
      <div className={classes.footer}>
        Copyright © 2020- Diseño Web realizado por
        <span>
          <b> | Diana Jaramillo</b>
        </span>
      </div>
    </div>
  );
};

export default Footer;
