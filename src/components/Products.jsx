import React from "react";
import pic1 from "../img/ziri1.JPG";
import pic2 from "../img/cafe.jpg";
import acce from "../img/accel.JPG";
import amalaki from "../img/amalaki.JPG";
import colageno from "../img/colageno.JPG";
import useStyle from "./ThemaConfi";
import cbd from "../img/Cbd.JPG";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Products = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.products}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            color="initial"
            align="center"
            //className={classes.texProduct}
            style={{
              color: "black",
              fontSize: "48px",
              marginTop: "7px",
              letterSpacing: "6px",
              padding: "18px",
            }}
          >
            Suplementación Inteligente
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardproduct}>
            <CardActionArea
              style={{
                width: "336px",
                display: "inline",
              }}
            >
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                style={{
                  width: "151px",
                  display: "inline",
                  borderRadius: "16px",
                }}
                className={classes.product1}
                image={pic1}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Proteina Achieve
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ margin: "19px 7px" }}
                >
                  - Ayuda a mantener un peso corporal. <br />
                  - Desarrolla masa muscular. <br /> -Contiene antioxidantes y
                  fibra, respaldando la digestión y la absorción de nutrientes.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardproduct}>
            <CardActionArea style={{ width: "336px", display: "inline" }}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                style={{
                  width: "151px",
                  display: "inline",
                  borderRadius: "16px",
                }}
                className={classes.product1}
                image={pic2}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Café Rise
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ margin: "19px 7px" }}
                >
                  -Café alcalino con antioxidante. <br /> - Oxidador de grasa y
                  termogénico.
                  <br /> -Café Colombiano arábico.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardproduct}>
            <CardActionArea style={{ width: "336px", display: "inline" }}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                style={{
                  width: "151px",
                  display: "inline",
                  borderRadius: "16px",
                }}
                className={classes.product1}
                image={acce}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Accell
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ margin: "19px 7px" }}
                >
                  -Acelerador metabólico y energizante natural.
                  <br />
                  -Controla tus niveles de ansiedad . <br />- Respalda la salud
                  digestiva y facilitia la absorción de nutrientes.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardproduct}>
            <CardActionArea
              style={{
                width: "336px",
                display: "inline",
              }}
            >
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                style={{
                  width: "151px",
                  display: "inline",
                  borderRadius: "16px",
                }}
                className={classes.product1}
                image={colageno}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Colágeno Renogen
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ margin: "19px 7px" }}
                >
                  - Triple hidrolización y facil disolución. <br />
                  - Con cúrcuma, amalaki y vitamina C. <br />
                  - Protetor articular. <br />- Mejora el aspecto de la piel ,
                  uñas y cabello.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardproduct}>
            <CardActionArea
              style={{
                width: "336px",
                display: "inline",
                borderRadius: "16px",
              }}
            >
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                style={{
                  width: "151px",
                  display: "inline",
                  borderRadius: "16px",
                }}
                className={classes.product1}
                image={cbd}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  CBD
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ margin: "19px 7px" }}
                >
                  - Cannabis medicinal con tecnología avanzada ultracell.
                  <br /> - Maximima los beneficios del aceite en un 94% del
                  cañamo. <br /> - Contiene multiples propiedades terapéutica.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardproduct}>
            <CardActionArea
              style={{
                width: "336px",
                display: "inline",
                borderRadius: "16px",
              }}
            >
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                style={{
                  width: "151px",
                  display: "inline",
                  borderRadius: "16px",
                }}
                className={classes.product1}
                image={amalaki}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Amalaki
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ margin: "19px 7px" }}
                >
                  - Respalda una digestión óptima.
                  <br />
                  - Rejuvenecedor celular. <br />
                  - Crea una senación de equilibrio y armonia. <br />-
                  Antioxiodante.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
