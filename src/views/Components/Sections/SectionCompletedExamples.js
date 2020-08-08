import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { CardActionArea, CardContent, CardMedia } from "@material-ui/core";

//animation
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  const classes2 = useStyles2();

  return (
    <>
    <div className={classes2.titleSeparate}>
      <div className={classes2.titleNews}>Events</div>
      <hr className={classes2.hr} />
    </div>
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes2.titleNews2}>Announcement</div>
        <GridContainer justify="center" style={{ margin: "8% 0 0 0"}}>
          <GridItem xs={12} sm={12} md={12}>
          <div className="row">
              <div className="col-xs-12 col-md-4 col-lg-4">
                <ScrollAnimation animateIn="fadeInUp" animateOnce="true" duration="1">
                    <CardActionArea>
                        <CardMedia
                        className={classes2.media}
                        image="https://kuliahditurki.com/wp-content/uploads/2018/06/universitas-selcuk-turki.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <div className={classes2.containerInfo}>
                            Test
                        </div>
                        <br />
                        <div className={classes2.info}>
                            Kurban Idul Adha sebagai bentuk keimanan
                        </div>
                        </CardContent>
                    </CardActionArea>
                </ScrollAnimation>
              </div>
              <div className="col-xs-12 col-md-4 col-lg-4">
                  <ScrollAnimation animateIn='fadeInUp' animateOnce="true" duration="1.5">
                  <CardActionArea>
                      <CardMedia
                      className={classes2.media}
                      image="https://beritaturki.com/wp-content/uploads/2019/03/maxresdefault-1-4-1024x576.jpg"
                      title="Contemplative Reptile"
                      />
                      <CardContent>
                      <div className={classes2.containerInfo}>
                          Test
                      </div>
                      <br />
                      <div className={classes2.info}>
                          King Abdul Aziz University sedang membuka beasiswa pelajar
                      </div>
                      </CardContent>
                  </CardActionArea>
              </ScrollAnimation>
              </div>
              <div className="clearfix hidden-sm-down hidden-lg-up"></div>
              <div className="col-xs-12 col-md-4 col-lg-4">
                  <ScrollAnimation animateIn='fadeInUp' animateOnce="true" duration="2">
                  <CardActionArea>
                      <CardMedia
                      className={classes2.media}
                      image="https://kuliahditurki.net/wp-content/uploads/2020/02/uludag-university.jpg"
                      title="Contemplative Reptile"
                      />
                      <CardContent>
                      <div className={classes2.containerInfo}>
                          Test
                      </div>
                      <br />
                      <div className={classes2.info}>
                          Yuk Ketahui cara aman menangkal virus
                      </div>
                      </CardContent>
                  </CardActionArea>
              </ScrollAnimation>
              </div>
          </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
    </>
  );
}


const useStyles2 = makeStyles((theme) => ({
  media: {
    height: 200
  },
  titleSeparate: {
    height: "30vh", 
    background: "#FFF",
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10%"
  },
  titleNews: {
    height: "30%",
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Roboto Slab"
  },
  titleNews2: {
    fontWeight: 700,
    fontSize: 30,
    lineHeight: "40px",
    fontFamily: "Roboto Slab",
    color: "#FFFFFF",
    textTransform: "uppercase",
    padding: 18
  },
  containerInfo: {
    width: "100%",
    padding: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffb942",
    marginTop: "-30px",
    textTransform: "uppercase",
    color: "#FFFFFF !important",
    fontSize: "15px",
    fontFamily: "Roboto",
    lineHeight: "30px",
    fontWeight: 700
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
    fontFamily: "Roboto Slab",
    color: "#FFFFFF !important",
  },
  hr: {
    borderBottom: "1px solid #465161",
    width: "42px",
    lineHeight: "100px",
    position: "absolute"
  }
}));