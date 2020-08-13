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
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";
import team4 from "assets/img/faces/card-profile1-square.jpg";
import team5 from "assets/img/faces/card-profile2-square.jpg";
import team6 from "assets/img/faces/card-profile4-square.jpg";
import team7 from "assets/img/faces/card-profile5-square.jpg";

const teams = [
  {
    "id": 1,
    "name": "Siti Maesaroh",
    "img": team6,
    "title": "Wali santri",
    "quotes": "PPM Wiriosoedarmo merupakan pesantren Muhammadiyah pertama di Kebumen. Dan saya sangat antusias menyekolahkan anak saya disana"
  },
  {
    "id": 2,
    "name": "Ali Zaenal Abidin",
    "img": team2,
    "title": "Wali santri",
    "quotes": "PPM Wiriosoedarmo menerapkan konsep modernitas tanpa mengesampingkan pembentukan karakter santri"
  },
  {
    "id": 3,
    "name": "Ridwan",
    "img": team4,
    "title": "Santri SMP PPM Wiriosoedarmo",
    "quotes": "Dengan adanya program dhaurah saya yang tadinya belum hafal Al Quran sudah hafal 15 Jus hanya dalam waktu 1 tahun"
  },
  {
    "id": 4,
    "name": "Fina Listiani",
    "img": team7,
    "title": "Santri SMA PPM Wiriosoedarmo",
    "quotes": "PPM Wiriosoedarmo bekerjasama dengan kampus-kampus di dalam dan luar negeri. Ini sangat membantu terutama saya yang sudah kelas 12 SMA"
  },
  {
    "id": 5,
    "name": "Khoerudin Umar",
    "img": team5,
    "title": "Santri SMA PPM Wiriosoedarmo",
    "quotes": "Dengan adanya program mudhofir (senior), kami dapat belajar tentang kepemimpinan dan memberikan beban tanggungjawab kepada kami untuk mencontohkan perilaku yang baik kepada santri-santri baru"
  },
  {
    "id": 6,
    "name": "Heri Pramono",
    "img": team5,
    "title": "Mudhir PPM Wiriosoedarmo",
    "quotes": "Pendidikan karakter yang berlandaskan prinsip-prinsip dasar ke muhammadiyahan menjadi pokok ajaran yang kami terapkan di PPM Wiriosoedarmo"
  },
  {
    "id": 7,
    "name": "Fina Listiani",
    "img": team3,
    "title": "Ketua PCM Gombong",
    "quotes": "PPM Wiriosoedarmo dibangun untuk memenuhi kebutuhan akan pendidikan moral dan karakter pada generasi muda saat ini yang mengalami kecenderungan menurun"
  },
  {
    "id": 8,
    "name": "Widiantoro Triatmadji",
    "img": team4,
    "title": "Santri SMA PPM Wiriosoedarmo",
    "quotes": "PPM Wiriosoedarmo bekerjasama dengan kampus-kampus di dalam dan luar negeri. Ini sangat membantu terutama saya yang sudah kelas 12 SMA"
  }
]

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>
        Testimoni
        <hr className={classes.hr} />
      </h2>
        <Slider 
        dots={false}
        infinite={true}
        speed={2000}
        slidesToShow={3}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        draggable={true}
        >
          {
            teams.map(el => 
            <GridItem xs={12} sm={12} md={12} key={el.id}>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={el.img} alt="..." className={imageClasses} />
              </GridItem>
                  <CardHeader>
                  <h3 className={classes.cardTitle}>
                    {el.name}
                    <h4 className={classes.smallTitle}><small>{el.title}</small></h4>
                  </h3>
                  <CardBody>
                    <h4 className={classes.description}>
                      <i>
                      "{el.quotes}"
                      </i>
                    </h4>
                  </CardBody>
                  </CardHeader>
              </GridItem>
            )
          }
        </Slider>
    </div>
  );
}
