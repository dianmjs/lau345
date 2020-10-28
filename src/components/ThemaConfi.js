import { makeStyles } from "@material-ui/core/styles";
import image2 from "../img/fondo2.1.jpg";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "fixed",
    width: "100%",
    zIndex: "100",
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
    marginRight: theme.spacing(1),
    "&:hover": {
      color: "#ff7e67",
    },
  },
  topNavCollapse: {
    background: "rgba(0,0,0,0,0.774) !important",
  },

  content: {

    width: "100%",
    height: "97vh",
    backgroundImage: `url(${image2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat center cencer fixed",
    backgroundColor: "rgb(100,100,100)",
    backgroundBlendMode: "soft-light",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    [theme.breakpoints.down('sm')]: {
     width:"auto"
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
    [theme.breakpoints.down('sm')]: {
      padding: "227px 43px",
     },
  },
  produtitle:{
    padding: "3px",
    display: "flow-root",
  },
  textlau: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px",
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

    [theme.breakpoints.down('sm')]: {
      width: "33px",
      padding: "154px 0px",
      position: "absolute",
      display: "grid",
     },
  },
  products: {
    width: "100%",
    display: "flex",
    textAlign: "center",
    backgroundColor: "#f6f6f6",
    [theme.breakpoints.down('sm')]: {
     width:"auto",
    },
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
    backgroundRepeat: "no-repeat center cencer fixed",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center center",
    width: "100%",
    height: "100%",
    display: "flex",
    textAlign: "center",
  
    [theme.breakpoints.down('sm')]: {
      width:"auto"
     },
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
  
  },

  circulo: {
    borderRadius: "24px",
    width: "200px",
    height: "200px",
    display: "block",
    margin: "auto",
    marginTop: "19px",
    border: "4px solid white",

  
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
    height: "100%",
    lineHeight: "2.7em",
    "@media (max-width:600px)": {
      width: "152%",
    },
  },
  letterfooter: {
    fontSize: "17px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px",
    },
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
  contenedor: {
    width: "100%",
    heigth: "100%",
  },
}));
