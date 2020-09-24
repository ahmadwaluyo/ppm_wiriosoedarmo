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

const useStyles = makeStyles(styles);

export default function Articles(props) {
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
              mainSrc={"https://i.ibb.co/PDchcmg/Screenshot-from-2020-08-14-09-45-08.png"}
              onCloseRequest={() => setIsOpen(false)}
              animationDuration={2000}
              enableZoom={true}
            />)
        }
        <div className={classes.container}>
            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12} onClick={() => handleModal()}>
                        <img
                        alt="Screenshot-from-2020-08-14-09-45-08"
                        src="https://i.ibb.co/PDchcmg/Screenshot-from-2020-08-14-09-45-08.png"
                        className={navImageClasses}
                        />
                    </GridItem>
                </GridContainer>
            </GridItem>
            </GridContainer>
        </div>
        <Footer />
        </>
    )
}