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

import team2 from "assets/img/faces/christian.jpg";
const team1 = require("assets/img/santri.jpg");
// import team3 from "assets/img/faces/kendall.jpg";
// import team6 from "assets/img/faces/card-profile4-square.jpg";
const team3 = `https://scontent.fjog3-1.fna.fbcdn.net/v/t1.0-9/22885893_201418833734900_649428011699348951_n.jpg?_nc_cat=103&_nc_sid=174925&_nc_eui2=AeG-SrcPUsT0xPB48GSj1OziextadMw5O7N7G1p0zDk7s5cplsx4Dq_2R5HisSNj6s1jG-3nJIoePZnGuerFfsNT&_nc_ohc=if4Y6Vn0MgEAX_4YKco&_nc_ht=scontent.fjog3-1.fna&oh=987b7b836b04387520851298443fd879&oe=5F630121`
const team4 = `https://i.ibb.co/VxfYLRh/rsz-84056977-184480152826792-984029371754872832-n.jpg`
const team5 = `https://scontent.fjog3-1.fna.fbcdn.net/v/t1.0-9/117400166_3771137856247737_8509947078661340032_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeEDg3I-enEcOittL8IwfgbukCYApHUeCIWQJgCkdR4IhUf2TiHHIlMwGRHtdpyUFe_lz1c_kS_ms-ALSYnYmIxz&_nc_ohc=h-H5oS0fCxoAX93Tmsw&_nc_ht=scontent.fjog3-1.fna&oh=5e946796516937371a9e7599b6ec9e44&oe=5F663071`;
const team6 = require("assets/img/tutorial/tutorial_nenek.jpg")
const team7 = `https://scontent.fjog3-1.fna.fbcdn.net/v/t1.0-9/90997142_857338168025827_7161453882671890432_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_eui2=AeFPPxmFveMbISLcBs-KAisR3_wWUqOri4Hf_BZSo6uLgUkHKklP104UV48k1c0QgVdT3el-w2nRvyXe0LAKu5-k&_nc_ohc=eptCL_tAkkIAX8k-hp6&_nc_ht=scontent.fjog3-1.fna&oh=f6f2c8dddafd72889befda3359cff443&oe=5F63FCA3`
const team8 = `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVciV2KKVfAF-OJ0Y4P9stoPT-fcjsPZDO1A&usqp=CAU`

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
    "name": "Fina Listiyani",
    "img": team7,
    "title": "Santri SMA PPM Wiriosoedarmo",
    "quotes": "PPM Wiriosoedarmo bekerjasama dengan kampus-kampus di dalam dan luar negeri. Ini sangat membantu terutama saya yang sudah kelas 12 SMA"
  },
  {
    "id": 5,
    "name": "Khoerudin Umar",
    "img": team1,
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
    "name": "Widiantoro Triatmadji",
    "img": team3,
    "title": "Ketua PCM Gombong",
    "quotes": "PPM Wiriosoedarmo dibangun untuk memenuhi kebutuhan akan pendidikan moral dan karakter pada generasi muda saat ini yang mengalami kecenderungan menurun"
  },
  {
    "id": 8,
    "name": "Fina Dwi",
    "img": team8,
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
