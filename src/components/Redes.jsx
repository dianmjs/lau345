import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import useStyle from "./ThemaConfi";
import Grid from "@material-ui/core/Grid";

const Redes = (props) => {
  const classes = useStyle();

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div className={classes.redes}>
          <a
            href="https://www.instagram.com/laugultratrainer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon
              fontSize="large"
              className={classes.instagram}
              style={{ width: "40px", height: "40px" }}
            />
          </a>
          <a
            href="https://wa.link/hgj4iv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon
              fontSize="large"
              className={classes.whatsap}
              style={{ width: "40px", height: "40px" }}
            />
          </a>
        </div>
      </Grid>
    </Grid>
  );
};

export default Redes;
