import { makeStyles } from "@material-ui/core/styles";
import image2 from "../img/fondo2.jpg";
//import Typography from "@material-ui/core/Typography";

export default makeStyles((theme) => ({
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h2",
        h2: "h2",
        h3: "h2",
        h4: "h2",
        h5: "h2",
        h6: "h2",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "span",
        body2: "span",
      },
    },
  },
  root: {
    display: "flex",
    position: "fixed",
    width: "100%",
    zIndex: "1000",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  offset: theme.mixins.toolbar,

  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 244,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    },
  },

  title: {
    flexGrow: 1,
  },
  navbar: {
    marginRight: theme.spacing(3),
    "&:hover": {
      color: "#ff7e67",
    },
  },
  topNavCollapse: {
    background: "rgba(0,0,0,0,0.774) !important",
  },

  content: {
    width: "100%",
    height: "90vh",
    backgroundImage: `url(${image2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgb(100,100,100)",
    backgroundBlendMode: "soft-light",
    "@media (max-width:600px)": {
      width: "100%",
    },
  },

  img1: {
    width: "54%",
    borderRadius: "182px",
  },
  imagen: {
    marginTop: "40px",
    marginLeft: "112px",
  },
  text: {
    color: "white",
    display: "flex",
    padding: "150px",
    flexDirection: "column",
    "@media (max-width:600px)": {
      fontSize: "15px",
    },
  },

  parraf: {
    fontSize: "90px",
    "@media (min-width:600px)": {
      fontSize: "15px",
    },
  },

  redes: {
    position: "fixed",
    top: "8px",
    right: "8px",
    padding: "184px 5px",
    display: "grid",
    color: "white",

    "@media (max-width:768px)": {
      padding: "154px 0px",
      width: "33px",
    },
  },
  products: {
    display: "flex",
    textAlign: "center",
    backgroundColor: "#f6f6f6",
  },
  cardproduct: {
    maxWidth: 345,
    margin: "1em",
    display: "contents",
  },
  List: {
    color: "#1a1a2e",
    fontFamily: "cursive",
  },
  training: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  facebook: {
    backgroundColor: "#2E406E",
    color: "white",
    borderRadius: "1rem 0 0 0",
  },
  instagram: {
    backgroundColor: "#c2185b",
    color: "white",
    borderRadius: "1rem 0 0 0",
    width: "43px",
    height: "46px",
  },
  whatsap: {
    backgroundColor: "#00bb2d ",
    color: "white",
    borderRadius: "0 0 0 1rem",
    width: "43px",
    height: "46px",
  },
  testimonios: {
    backgroundColor: "#f34e3a",
    width: "100%",
    height: "100%",
    display: "flex",
    textAlign: "center",
    //padding: "120px 0",
  },
  large: {
    margin: theme.spacing(1),
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  test1: {
    fontSize: "12px",
    color: "white",
  },

  contetesti: {
    display: "initial",
    texAling: "center",
    position: "relative",
    margin: "31px",
    width: "40%",
    /*["@media (max-width: 600px)"]: {
      padding: "0 135px",
    },*/
  },

  circulo: {
    borderRadius: "24px",
    width: "200px",
    height: "200px",
    display: "block",
    margin: "auto",
    marginTop: "19px",
    border: "4px solid white",

    /*["@media (max-width: 599px)"]: {
      width: "150px",
      height: "150px",
    },*/
  },
  divider: {
    width: "40%",
    margin: "auto",
    display: "block",
    HEIGHT: "0px",
  },

  footer: {
    background: "black",
    color: "white",
    textAlign: "center",
    padding: "1.5em 02",
    width: "100%",
    height: "47px",
    lineHeight: "2.7em",
  },
  colortext: {
    "&:hover": {
      color: "#ff7e67",
    },
  },
  textTraining: {
    color: "white",
    fontSize: "48px",
    marginTop: "-66px",
    letterSpacing: "6px",
  },
  texProduct: {
    color: "black",
    fontSize: "48px",
    marginTop: "-66px",
    letterSpacing: "7px",
    padding: "18px",
  },
  menu: {
    margin: "12px",
  },
  button: {
    width: "fit-content",
  },
  product1: {
    marginTop: "12px",
  },
  cuadrado: {
    width: "426px",
    border: "1px solid",
    height: "34px",
    transform: "skew(2deg)",
  },
  area: {
    width: "336px",
  },
  comill: {
    width: "20px",
    height: "20px",
    margin: " -23px 75px",
  },
}));
