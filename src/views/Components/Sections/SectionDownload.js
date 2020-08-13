import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
// import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
// import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import Slider from "react-slick";
// import { Container, Card, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/partnership/logo_ui_kuning.png";
import team3 from "assets/img/partnership/ugm.png";
import team4 from "assets/img/partnership/university_madinah.png";
import team5 from "assets/img/partnership/mara2.png";
import team6 from "assets/img/partnership/uin.png";
import team7 from "assets/img/partnership/alazhar.png";

const teams = [
  {
    "id": 1,
    "img": team2,
  },
  {
    "id": 2,
    "img": team3,
  },
  {
    "id": 3,
    "img": team4,
  },
  {
    "id": 4,
    "img": team5,
  },
  {
    "id": 5,
    "img": team6,
  },
  {
    "id": 6,
    "img": team7,
  },
  {
    "id": 7,
    "img": team3,
  },
  {
    "id": 8,
    "img": team4,
  }
]

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    // classes.imgRaised,
    // classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>
        Partnership
        <hr className={classes.hr} />
      </h2>
        <Slider 
        dots={false}
        infinite={true}
        speed={3000}
        slidesToShow={4}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3750}
        draggable={true}
        className={classes.containerSlider}
        >
          {
            teams.map(el => 
              <GridItem xs={8} sm={8} md={6} key={el.id} className={classes.itemGridPartnership}>
                <img src={el.img} alt="..." className={imageClasses} />
              </GridItem>
            )
          }
        </Slider>
    </div>
  );
}
