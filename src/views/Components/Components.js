import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionNews from "./Sections/SectionBasics.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
import Loader from 'components/Backdrop/Loader.js';
import TextTransition, { presets } from "react-text-transition";
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

const HeaderText = [
  "Selamat datang",
  "Misi Pesantren Pertama :",
  "Misi Pesantren Kedua :",
  "Misi Pesantren Ketiga :",
  "Misi Pesantren Keempat :"
];
const SubHeaderText = [
  `di Pondok Pesantren Modern Wiriosoedarmo Muhammadiyah Gombong`,
  `"Mampu membaca kitab kuning"`,
  `"Mampu berbahasa arab dengan fasih"`,
  `"Mampu berbahasa inggris dengan fasih"`,
  `"Mampu menghafal Al Quran minimal 5 jus sampai lulus"`
]

export default function Components(props) {
  const [open, setOpen] = React.useState(true);
  const [index, setIndex] = React.useState(0);
  const classes = useStyles();
  const { ...rest } = props;
  const imgBackground = new URL("https://firebasestorage.googleapis.com/v0/b/storageahmad-134a6.appspot.com/o/rsz_background-header.jpg?alt=media&token=f356647b-db18-45eb-855e-88ec438c0520");
  
  React.useEffect(() => {
    setTimeout(() => {
        setOpen(false);
    }, [1500])
  }, [])

  React.useEffect(() => {
    setInterval(() =>
      setIndex(index => index + 1),
      4000
    );
  }, []);

  return (
    <div>
      <Loader open={open} />
      <Header
        logo={require('assets/img/wiriosoedarmo.png')}
        brand="PPM Wiriosoedarmo Gombong"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={imgBackground}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>
                  <TextTransition
                    text={ HeaderText[index % HeaderText.length] }
                    springConfig={ presets.gentle }
                    delay={2000}
                  />
                </h1>
                <h3 className={classes.subtitle}>
                  <TextTransition
                      text={ SubHeaderText[index % SubHeaderText.length] }
                      springConfig={ presets.gentle }
                      delay={3000}
                    />
                </h3>
                <br />
                <Link to={"/sejarah"} className={classes.link}>
                  <Button variant="contained" color="primary">
                    Get Started
                  </Button>
                </Link>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionNews />
        <SectionCarousel />
        {/* <SectionTabs /> */}
        <SectionPills />
        {/* <SectionNotifications /> */}
        <SectionTypography />
        {/* <SectionJavascript /> */}
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        {/* <SectionDownload /> */}
      </div>
      <Footer />
    </div>
  );
}