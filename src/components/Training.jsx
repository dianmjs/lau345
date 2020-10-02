import React from "react";
import useStyle from "./ThemaConfi";
import Test1 from "../img/Test1.jpg";
import Test2 from "../img/Test2.jpeg";
import Test3 from "../img/Test3.jpeg";
import Test4 from "../img/Test4.jpeg";
import comillas from "../img/quote.svg";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const Training = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.testimonios}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            align="center"
            //className={classes.textTraining}
            style={{
              color: "white",
              fontSize: "48px",
              marginTop: "37px",
              letterSpacing: "6px",
            }}
          >
            Transformando vidas
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <div className={classes.contetesti}>
            <img
              src={Test1}
              alt="circulo"
              className={classes.circulo}
              id="animado"
            />
            <br />
            <img src={comillas} alt="comillas" className={classes.comill} />

            <Typography
              variant="subtitle1"
              //className={classes.test1}
              align="center"
              style={{
                fontSize: "12px",
                color: "white",
                margin: "inherit",
              }}
            >
              Hace unos meses atrás me presentaron a Laura cómo entrenadora, una
              mujer que respeto, y me ha guiado en este trasegar que me presenta
              la vida, ha sido un punto de apoyo para crecer en varios aspectos
              y sobretodo para mejorar mi apariencia física.
            </Typography>
            <Typography
              variant="subtitle2"
              align="center"
              style={{
                color: "white",
                fontFamily: "revert",
                margin: "26px",
              }}
            >
              - Catalina lópez
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={3}>
          <div className={classes.contetesti}>
            <img src={Test2} alt="circulo" className={classes.circulo} />
            <br />
            <img src={comillas} alt="comilla" className={classes.comill} />
            <Typography
              variant="subtitle1"
              color="initial"
              //className={classes.test1}
              style={{
                fontSize: "12px",
                color: "white",
                margin: "inherit",
              }}
              align="center"
            >
              Un día desperté y tome la decisión de mejorar mis hábitos, así que
              me di la oportunidad de iniciar un nuevo cambio. Agradezco a Laura
              por haberse presentado en mi camino y enseñarme a perseverar, a
              ser constante y disciplinada, al día de hoy gozo de un mejor
              estado de salud, más vitalidad y con mucho amor propio.
            </Typography>
            <Typography
              variant="subtitle2"
              align="center"
              style={{ color: "white", fontFamily: "revert", margin: "26px" }}
            >
              - Paula Alzate
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <div className={classes.contetesti}>
            <img src={Test3} alt="circulo" className={classes.circulo} />

            <br />
            <img src={comillas} alt="comillas" className={classes.comill} />
            <Typography
              variant="subtitle1"
              color="initial"
              // className={classes.test1}
              style={{
                fontSize: "12px",
                color: "white",
                margin: "inherit",
              }}
              align="center"
            >
              Nada más importante que entrenar con el apoyo de personas que
              aparte de tener todo el conocimiento te suman energía para lograr
              tus metas. Entrenamientos que te dan resultados gigantes.
            </Typography>
            <Typography
              variant="subtitle2"
              align="center"
              style={{ color: "white", fontFamily: "revert", margin: "26px" }}
            >
              - Alejandro Suárez
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <div className={classes.contetesti}>
            <img src={Test4} alt="circulo" className={classes.circulo} />

            <br />
            <img src={comillas} alt="comillas" className={classes.comill} />
            <Typography
              variant="subtitle1"
              //className={classes.test1}
              style={{
                fontSize: "12px",
                color: "white",
                margin: "inherit",
              }}
              align="center"
            >
              Laura ha logrado realizar cambios maravillosos en mi. Te guía, te
              orienta, se preocupa por que tengas una buena técnica a la hora de
              realizar tus ejercicios y sobre todo que hace que tus expectativas
              si se cumplan si sigues su orientación.
            </Typography>
            <Typography
              variant="subtitle2"
              align="center"
              style={{ color: "white", fontFamily: "revert", margin: "26px" }}
            >
              - Guido Herrera
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Training;
