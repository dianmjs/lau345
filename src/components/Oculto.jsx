import React from "react";
import { withWidth, Typography, Hidden, Button } from "@material-ui/core";

const Oculto = (props) => {
  return (
    <div>
      <Typography variant="h6" color="initial">
        Ancho:{props.width}
      </Typography>
    </div>
  );
};

export default withWidth()(Oculto);
