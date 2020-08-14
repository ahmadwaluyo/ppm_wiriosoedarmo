import React from 'react';

import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

//data fetch
import AdmissionPict from "data/AdmissionPict";

//loader
import Loader from "components/Backdrop/Loader";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

//lightbox
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import BackgroundHeader from '../SubComponents/components/BackgroundHeader';
import Footer from '../SubComponents/components/Footer';

const useStyles = makeStyles(styles);

export default function Admission(props) {
  const { datas } = AdmissionPict;
  const classes = useStyles();
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


    return (
        <>
        <Loader open={open} />
        <BackgroundHeader data={'STUDENT ADMISSION'}/>
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
        <div className={classes.container}>
            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills
                alignCenter
                color="primary"
                tabs={[
                    {
                    tabButton: "Brosur 1",
                    tabContent: (
                        <GridContainer justify="center">
                        {
                            datas.map((el) =>
                                el.alt === "admission-1" ?
                                <GridItem xs={12} sm={12} md={4} key={el.id} onClick={() => handleModal(el.id)}>
                                    <img
                                    alt={el.alt}
                                    src={el.img}
                                    className={navImageClasses}
                                    />
                                </GridItem> : ""
                            )
                        }
                        </GridContainer>
                    )
                    },
                    {
                    tabButton: "Brosur 2",
                    tabContent: (
                        <GridContainer justify="center">
                        {
                            datas.map((el) =>
                                el.alt === "admission-2" ?
                                    <GridItem xs={12} sm={12} md={4} key={el.id} onClick={() => handleModal(el.id)}>
                                    <img
                                        alt={el.alt}
                                        src={el.img}
                                        className={navImageClasses}
                                    />
                                    </GridItem> : ""
                            )
                        }
                        </GridContainer>
                    )
                    },
                    {
                    tabButton: "Brosur 3",
                    tabContent: (
                        <GridContainer justify="center">
                        {
                            datas.map((el) =>
                                el.alt === "admission-3" ?
                                    <GridItem xs={12} sm={12} md={4} key={el.id} onClick={() => handleModal(el.id)}>
                                    <img
                                        alt={el.alt}
                                        src={el.img}
                                        className={navImageClasses}
                                    />
                                    </GridItem> : ""
                            )
                        }
                        </GridContainer>
                    )
                    }
                ]}
                />
            </GridItem>
            {/* <div className={classes.description}>
                <h1>
                    Contact : 081327455703
                </h1>
            </div> */}
            </GridContainer>
        </div>
        <Footer />
        </>
    )
}
    