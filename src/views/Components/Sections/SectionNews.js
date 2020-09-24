import React from "react";
import { Link } from "react-router-dom";
// card plugin
import { CardContent, CardMedia } from "@material-ui/core";
//animation
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

//css
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const classes2 = useStyles2();
  
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <ScrollAnimation animateIn='fadeInUp' animateOnce="true" duration="1">
            <div className={classes2.titleNews}>Last News</div>
            <hr className={classes.hr} />
          </ScrollAnimation>
        </div>
        <div class="row mt-5">
              <div className={classes2.containerMedia}>
                <ScrollAnimation animateIn="fadeInUp" animateOnce="true" duration="1">
                  <Link to="/articles" className={classes2.link}>
                    <CardMedia
                      className={classes2.media}
                      image={require("assets/img/news_img/waqaf.jpeg")}
                      title="Waqaf Quran"
                      />
                      <CardContent>
                      <div className={classes2.containerInfo}>
                      MENERIMA WAKAF AL QURAN
                      </div>
                      <br />
                      <div className={classes2.info}>
                      PM Wiriosoedarmo Muhammadiyah Gombong menerima wakaf al Quran dari seorang aghnia sejumlah 100 eksemplar.
                      </div>
                    </CardContent>
                  </Link>
                </ScrollAnimation>
              </div>
              <div className={classes2.containerMedia}>
              <ScrollAnimation animateIn='fadeInUp' animateOnce="true" duration="1">
                <Link to="/admission" className={classes2.link}>
                  <CardMedia
                  className={classes2.media}
                  image={require("assets/img/1.jpg")}
                  title="PSB Wiriosoedarmo"
                  />
                  <CardContent>
                  <div className={classes2.containerInfo}>
                      PSB PM Wiriosoedarmo
                  </div>
                  <br />
                  <div className={classes2.info}>
                      PM Wiriosoedarmo membuka pendaftaran santri baru untuk tahun pelajaran 2021/2022
                  </div>
                  </CardContent>
                </Link>
              </ScrollAnimation>
              </div>
              <div class="clearfix hidden-sm-down hidden-lg-up"></div>
              <div className={classes2.containerMedia}>
              <ScrollAnimation animateIn='fadeInUp' animateOnce="true" duration="1">
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
              </ScrollAnimation>
              </div>
              <div className={classes2.containerMedia}>
              <ScrollAnimation animateIn='fadeInUp' animateOnce="true" duration="1">
                  <CardMedia
                  className={classes2.media}
                  image="https://minanews.net/wp-content/uploads/2018/08/Daily-Sabah.jpg"
                  title="Contemplative Reptile"
                  />
                  <CardContent>
                  <div className={classes2.containerInfo}>
                      Test
                  </div>
                  <br />
                  <div className={classes2.info}>
                      Pengangguran semakin meningkat
                  </div>
                  </CardContent>
              </ScrollAnimation>
              </div>
          </div>
      </div>
    </div>
  );
}

const useStyles2 = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180
  },
  containerMedia: {
    width: 285,
    padding: 10
  },
  titleNews: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    fontWeight: "bold"
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
    color: "#FFFFFF",
    fontSize: "15px",
    fontFamily: "Roboto",
    lineHeight: "30px",
    fontWeight: 700
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: 700,
    fontFamily: "Roboto Slab",
  },
  link: {
    color: "#3c4858",
    "&:hover" : {
      color: "#000"
    }
  }
}));