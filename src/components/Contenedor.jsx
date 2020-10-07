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
  const handleClick = (e) => {
    e.preventDefault();
    console.log("esto fue clickeado");
  };
  return (
    <div className="contenedor">
      <Header accionAbrir={accionAbrir} />
      <Hidden smUp>
        <Cajon variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden>
      <a
        name="home"
        href="home"
        style={{ textDecoration: "none" }}
        onClick={handleClick}
      >
        <Home />
      </a>
      <Redes />
      <a
        name="training"
        href="training"
        style={{ textDecoration: "none" }}
        onClick={handleClick}
      >
        <Training />
      </a>
      <a
        name="products"
        href="products"
        style={{ textDecoration: "none" }}
        onClick={handleClick}
      >
        <Products />
      </a>
      <Footer />
    </div>
  );
};

export default Contenedor;
