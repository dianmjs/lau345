import React from "react";
import Header from "../components/Header";
import Cajon from "./Cajon";
import { Hidden } from "@material-ui/core";
import Home from "./Home";
import Redes from "./Redes";
import Training from "./Training";
import Products from "./Products";
import Footer from "./Footer";

const Contenedor = (props) => {
  const [abrir, setAbrir] = React.useState(false);

  const accionAbrir = () => {
    setAbrir(!abrir);
  };

  return (
    <div>
      <Header accionAbrir={accionAbrir} />
      <Hidden smUp>
        <Cajon variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden>
      <a name="home" href="home" />
      <Home />
      <Redes />
      <a name="training" href="training" />
      <Training />
      <a name="products" href="products" />
      <Products />
      <Footer />
    </div>
  );
};

export default Contenedor;
