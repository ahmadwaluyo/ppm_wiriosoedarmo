import React, { Suspense } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

//loader
import Loader from "components/Backdrop/Loader";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

//scrollup
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Toolbar from '@material-ui/core/Toolbar';

//lightbox
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import GridItem from "components/Grid/GridItem.js";
import Galeries from "data/Galeries";

console.log(Galeries);

const useStyles = makeStyles(styles);

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

export default function GaleryPage(props) {
  const { datas } = Galeries
  const classes = useStyles();
  const { ...rest } = props;
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const [open, setOpen] = React.useState(true);
  const [photoIndex, setPhotoIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleModal = (id) => {
    setIsOpen(true);
    setPhotoIndex(id-1);
  }

  React.useEffect(() => {
    setInterval(() => {
      setOpen(false)
    }, 2000)
  }, [])

  const loading = (
    <React.Fragment>
      <div id="container-main">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <br />
        Loading...
      </div>
    </React.Fragment>
  )

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
      {
        isOpen && (
          <Lightbox
              mainSrc={datas[photoIndex].img}
              nextSrc={datas[(photoIndex + 1) % datas.length].img}
              prevSrc={datas[(photoIndex + datas.length - 1) % datas.length].img}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + datas.length - 1) % datas.length)
              }
              onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % datas.length)
              }
              animationDuration={2000}
              enableZoom={true}
          />)
      }
      <Parallax small filter image={require("assets/img/1.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <Toolbar id="back-to-top-anchor" />
            <ScrollTop {...props}>
              <Fab color="secondary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>
            <div className={classes.description}>
              <h1>
                Galery Page
              </h1>
            </div>
            <Suspense fallback={<div>Loading... </div>}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "All",
                      tabContent: (
                        <GridContainer justify="center">
                          {
                            datas.map((el) =>
                              <GridItem xs={12} sm={12} md={3} key={el.id} onClick={() => handleModal(el.id)}>
                                <React.Suspense fallback={loading}>
                                <img
                                  alt={el.alt}
                                  src={el.img}
                                  className={navImageClasses}
                                />
                                </React.Suspense>
                              </GridItem>
                            )
                          }
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Peresmian",
                      tabContent: (
                        <GridContainer justify="center">
                          {
                            datas.map((el) =>
                            el.alt === "peresmian" ?
                                <GridItem xs={12} sm={12} md={3} key={el.id} onClick={() => handleModal(el.id)}>
                                  <React.Suspense fallback={loading}>
                                  <img
                                    alt={el.alt}
                                    src={el.img}
                                    className={navImageClasses}
                                  />
                                  </React.Suspense>
                                </GridItem> : ""
                            )
                          }
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Aero Modeling",
                      tabContent: (
                        <GridContainer justify="center">
                          {
                            datas.map((el) =>
                            el.alt === "aero" ?
                                <GridItem xs={12} sm={12} md={3} key={el.id} onClick={() => handleModal(el.id)}>
                                  <React.Suspense fallback={loading}>
                                  <img
                                    alt={el.alt}
                                    src={el.img}
                                    className={navImageClasses}
                                  />
                                  </React.Suspense>
                                </GridItem> : ""
                            )
                          }
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Kegiatan Santri",
                      tabContent: (
                        <GridContainer justify="center">
                          {
                            datas.map((el) =>
                            el.alt === "kegiatan" ?
                                <GridItem xs={12} sm={12} md={3} key={el.id} onClick={() => handleModal(el.id)}>
                                  <React.Suspense fallback={loading}>
                                  <img
                                    alt={el.alt}
                                    src={el.img}
                                    className={navImageClasses}
                                  />
                                  </React.Suspense>
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
            </Suspense>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
