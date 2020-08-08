import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
// import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
// import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

// import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

//loader
import Loader from "components/Backdrop/Loader";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function GaleryPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  // const imageClasses = classNames(
  //   classes.imgRaised,
  //   classes.imgRoundedCircle,
  //   classes.imgFluid
  // );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const [open, setOpen] = React.useState(true);
  const images = [
    {
      "img" : studio1,
      "alt" : "studio"
    },
    {
      "img" : studio2,
      "alt" : "studio"
    },
    {
      "img" : studio3,
      "alt" : "studio"
    },
    {
      "img" : studio4,
      "alt" : "studio"
    },
    {
      "img" : studio5,
      "alt" : "studio"
    },
    {
      "img" : work1,
      "alt" : "work"
    },
    {
      "img" : work2,
      "alt" : "work"
    },
    {
      "img" : work3,
      "alt" : "work"
    },
    {
      "img" : work4,
      "alt" : "work"
    },
    {
      "img" : work5,
      "alt" : "work"
    }
  ]

  React.useEffect(() => {
    setInterval(() => {
      setOpen(false)
    }, 2000)
  }, [])

  return (
    <div>
      <Loader open={open} />
      <Header
        color="transparent"
        brand="PPM Wiriosoedarmo Gombong"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/1.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <div className={classes.description}>
              <h1>
                Galery Page
              </h1>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "All",
                      // tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          {
                            images.map((el,index) =>
                              <GridItem xs={12} sm={12} md={4} key={index}>
                                <img
                                  alt="..."
                                  src={el.img}
                                  className={navImageClasses}
                                />
                              </GridItem>
                            )
                          }
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "HW",
                      // tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          {
                            images.map((el, index) =>
                              el.alt === "studio" ?
                                <GridItem xs={12} sm={12} md={4} key={index}>
                                  <img
                                    alt="..."
                                    src={el.img}
                                    className={navImageClasses}
                                  />
                                </GridItem> : ""
                            )
                          }
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Robotic",
                      // tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          {
                            images.map((el, index) =>
                              el.alt === "work" ?
                                <GridItem xs={12} sm={12} md={4} key={index}>
                                  <img
                                    alt="..."
                                    src={el.img}
                                    className={navImageClasses}
                                  />
                                </GridItem> : ""
                            )
                          }
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
