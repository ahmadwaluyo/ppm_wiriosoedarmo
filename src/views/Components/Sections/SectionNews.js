import React from "react";
import { Link } from "react-router-dom";
// card plugin
import { CardContent, CardActionArea, CardMedia, Card } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
//animation
import ScrollAnimation from 'react-animate-on-scroll';

//css
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const [state, setState] = React.useState({
    shadow: 1
  }) 
  const classes = useStyles();
  const classes2 = useStyles2();

  const onMouseOver = () => setState({ ...state, shadow: 3 });
  const onMouseOut = () => setState({ ...state, shadow: 1 });

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <ScrollAnimation animateIn='fadeInUp' animateOnce="true" duration="1">
            <div className={classes2.titleNews}>Last News</div>
            <hr className={classes.hr} />
          </ScrollAnimation>
        </div>
        <Row>
            <Col className={classes2.containerMedia}>
                <Link to="/admission" className={classes2.link}>
                  <CardActionArea>
                    <Card
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    zDepth={state.shadow}
                    className={classes2.cardMain}
                    >
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
                    </Card>
                  </CardActionArea>
                </Link>
            </Col>
            <Col className={classes2.containerMedia}>
                <Link to="/articles" className={classes2.link}>
                <CardActionArea>
                  <Card
                  onMouseOver={onMouseOver}
                  onMouseOut={onMouseOut}
                  zDepth={state.shadow}
                  className={classes2.cardMain}
                  >
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
                  </Card>
                  </CardActionArea>
                </Link>
            </Col>
            <Col className={classes2.containerMedia}>
                  <CardActionArea>
                    <Card
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    zDepth={state.shadow}
                    className={classes2.cardMain}
                    >
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
                    </Card>
                  </CardActionArea>
            </Col>
            <Col className={classes2.containerMedia}>
                <CardActionArea>
                  <Card
                  onMouseOver={onMouseOver}
                  onMouseOut={onMouseOut}
                  zDepth={state.shadow}
                  className={classes2.cardMain}
                  >
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
                  </Card>
                </CardActionArea>
              </Col>
          </Row>
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
    fontSize: "10px",
    fontFamily: "Roboto",
    lineHeight: "30px",
    fontWeight: 700
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "Roboto Slab",
  },
  link: {
    color: "#3c4858",
    "&:hover" : {
      color: "#000"
    }
  },
  cardMain: {
    height: "50vh"
  }
}));