import React from 'react';

import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

//loader
import Loader from "components/Backdrop/Loader";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

//lightbox
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import BackgroundHeader from '../SubComponents/components/BackgroundHeader';
import Footer from '../SubComponents/components/Footer';
const img = require('assets/img/pembayaran/info_pembayaran.png');

const useStyles = makeStyles(styles);

export default function InfoPembayaran(props) {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const [open, setOpen] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleModal = () => {
    setIsOpen(true);
  }

  React.useEffect(() => {
    setInterval(() => {
      setOpen(false)
    }, 2000)
  }, [])


    return (
        <>
        <Loader open={open} />
        <BackgroundHeader data={'PAYMENT'}/>
        {
        isOpen && (
          <Lightbox
              mainSrc={img}
              onCloseRequest={() => setIsOpen(false)}
              animationDuration={2000}
              enableZoom={true}
            />)
        }
        <div className="d-flex justify-content-center">
            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12} onClick={() => handleModal()}>
                        <img
                        alt="Screenshot-from-2020-08-14-09-45-08"
                        src={img}
                        className={navImageClasses}
                        />
                    </GridItem>
                </GridContainer>
            </GridItem>
        </div>
        <Footer />
        </>
    )
}