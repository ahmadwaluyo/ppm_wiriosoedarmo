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
import SectionNews from "./Sections/SectionNews.js";
import SectionAcademic from "./Sections/SectionAcademic.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionAnnouncement from "./Sections/SectionAnnouncement.js";
import SectionTestimoni from "../LandingPage/Sections/TeamSection";
import SectionPartnership from "./Sections/SectionDownload.js";
import Loader from 'components/Backdrop/Loader.js';
import TextTransition, { presets } from "react-text-transition";
import styles from "assets/jss/material-kit-react/views/components.js";

//scrollup
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Toolbar from '@material-ui/core/Toolbar';


//responsive
import { useMediaPredicate } from "react-media-hook";

const useStyles = makeStyles(styles);

const HeaderText = [
  "Selamat datang",
  "Program Unggulan Pertama :",
  "Program Unggulan Kedua :",
  "Program Unggulan Ketiga :",
  "Program Unggulan Keempat :"
];
const SubHeaderText = [
  `di Pondok Pesantren Modern Wiriosoedarmo Muhammadiyah Gombong`,
  `"Qiroatul Kutub (lancar membaca turats/kitab kuning)"`,
  `"Tahfidz Al Quran minimal 6 Juz"`,
  `"Al Lughoh Al Yaumiyyah (Mahir bahasa Arab dan bahasa inggris)"`,
  `"Al 'ulum Asy syar'iyyah"`
]

function ScrollTop(props) {
  const classes = useStyles()
  const { children, window } = props;
  
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.btnScroll}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Components(props) {
  const [open, setOpen] = React.useState(true);
  const [index, setIndex] = React.useState(0);
  const biggerThan400 = useMediaPredicate("(min-width: 480px)");
  const smallerThan400 = useMediaPredicate("(max-width: 480px)");
  const classes = useStyles();
  const { ...rest } = props;
  const imgBackground = [
  "https://firebasestorage.googleapis.com/v0/b/storageahmad-134a6.appspot.com/o/rsz_background-header.jpg?alt=media&token=f356647b-db18-45eb-855e-88ec438c0520",
  "https://firebasestorage.googleapis.com/v0/b/storageahmad-134a6.appspot.com/o/1.jpg?alt=media&token=0e390fb0-2403-431a-b245-bf1261e1be6d",
  "https://firebasestorage.googleapis.com/v0/b/storageahmad-134a6.appspot.com/o/rsz_2backgroundheader.jpg?alt=media&token=73b53602-e71e-4cc1-b7fe-4a815123ad67",
  "https://firebasestorage.googleapis.com/v0/b/storageahmad-134a6.appspot.com/o/rsz_background-header.jpg?alt=media&token=f356647b-db18-45eb-855e-88ec438c0520",
  "https://firebasestorage.googleapis.com/v0/b/storageahmad-134a6.appspot.com/o/rsz_dsc_2730.jpg?alt=media&token=eec69b13-8564-49ee-bfaf-1feffac26383"
];
  
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
        color="dark"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Toolbar id="back-to-top-anchor" />
      <Parallax image={imgBackground[0]}>
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
                <br />
                <Link to={"/sejarah"} className={classes.link}>
                  <Button size="md" className={classes.startedLink}>
                    Get Started
                  </Button>
                </Link>
              </div>
              {
                biggerThan400 ? biggerThan400 &&
                <div className="d-flex row justify-content-center align-items-center">
                  <div className={classes.linkBrand}>
                    <div className={classes.linkTitle}>
                      <div className="d-flex row justify-content-center align-items-center">
                        <div className="col-md-4">
                          <img  src="data:image/png;base64,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" alt="..."></img>
                        </div>
                          <div className="col-md-8">
                            Born to be a leader
                          </div>
                      </div>
                    </div>
                    <Link to={"/visimisi"} className={classes.link}>
                      <Button size="lg" className={classes.btnLink} simple>
                        View More
                      </Button>
                    </Link>
                  </div>
                  <div className={classes.linkBrand}>
                    <div className={classes.linkTitle}>
                      <div className="d-flex row justify-content-center align-items-center">
                        <div className="col-md-4">
                          <img  src="data:image/png;base64,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" alt="..."></img>
                        </div>
                        <div className="col-md-8">
                          Great Achievments
                        </div>
                      </div>
                    </div>
                    <Link to={"/achievments"} className={classes.link}>
                      <Button size="lg" className={classes.btnLink} simple>
                        View More
                      </Button>
                    </Link>
                  </div>
                  <div className={classes.linkBrand}>
                    <div className={classes.linkTitle}>
                      <div className="d-flex row justify-content-center align-items-center">
                        <div className="col-md-4">
                          <img  src="data:image/png;base64,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" alt="..."></img>
                        </div>
                        <div className="col-md-8">
                          Student Admission
                        </div>
                      </div>
                    </div>
                    <Link to={"/admission"} className={classes.link}>
                      <Button size="lg" className={classes.btnLink} simple>
                        View More
                      </Button>
                    </Link>
                  </div>
                </div> : smallerThan400 &&
                  <div className="d-flex row justify-content-center align-items-center">
                  <div className={classes.linkBrand}>
                    <div className={classes.linkTitle}>
                      <div className="d-flex row justify-content-center align-items-center">
                        <div className="col-md-4" >
                          <img  src="data:image/png;base64,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" alt="..."></img>
                        </div>
                          <div className="col-md-8" style={{ fontSize: 15}}>
                            Born to be a leader
                          </div>
                      </div>
                    </div>
                    <Link to={"/visimisi"} className={classes.link}>
                      <Button size="lg" className={classes.btnLink} simple style={{ fontSize: 10 }}>
                        View More
                      </Button>
                    </Link>
                  </div>
                  <div className={classes.linkBrand}>
                    <div className={classes.linkTitle}>
                      <div className="d-flex row justify-content-center align-items-center">
                        <div className="col-md-4">
                          <img  src="data:image/png;base64,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" alt="..."></img>
                        </div>
                        <div className="col-md-8">
                          Great Achievments
                        </div>
                      </div>
                    </div>
                    <Link to={"/achievments"} className={classes.link}>
                      <Button size="lg" className={classes.btnLink} simple>
                        View More
                      </Button>
                    </Link>
                  </div>
                  <div className={classes.linkBrand}>
                    <div className={classes.linkTitle}>
                      <div className="d-flex row justify-content-center align-items-center">
                        <div className="col-md-4">
                          <img  src="data:image/png;base64,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" alt="..."></img>
                        </div>
                        <div className="col-md-8">
                          Student Admission
                        </div>
                      </div>
                    </div>
                    <Link to={"/admission"} className={classes.link}>
                      <Button size="lg" className={classes.btnLink} simple>
                        View More
                      </Button>
                    </Link>
                  </div>
                </div>
              }
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
        <SectionNews />
        <SectionCarousel props={props} />
        <SectionAcademic />
        <SectionAnnouncement />
        <SectionPartnership />
        <SectionTestimoni />
      </div>
      <Footer />
    </div>
  );
}