import React from "react";
import Contenedor from "./components/Contenedor";
import { ThemeProvider } from "@material-ui/core/styles";
import useStyle from "../src/components/ThemaConfi";

function App() {
  const classes = useStyle();
  return (
    <ThemeProvider theme={classes.theme}>
      <Contenedor />
    </ThemeProvider>
  );
}

export default App;
