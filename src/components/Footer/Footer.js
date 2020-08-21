/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";

import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import styles2 from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);

export default function Footer(props) {
  const classes = useStyles();
  const classes2 = useStyles();
  const { history } = props;

  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                FAQ
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/presentation?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://blog.creative-tim.com/?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                Licenses
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}  made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="https://www.creative-tim.com?ref=mkr-footer"
            className={aClasses}
            target="_blank"
          >
            PM Wiriosoedarmo
          </a>
        </div>
        <div className={classes.center}>
          <div className={classes2.textCenter + " " + classes2.sharingArea}>
            <GridContainer justify="center">
              <h3>Thank you for visiting us!</h3>
            </GridContainer>
            <a href="https://wa.me/081327455703/?text=Assalamu'alaikum PPM Wiriosoedarmo, ada yang bisa di bantu ?" alt="whatsapp" target="_blank">
            <Button color="whatsapp">
              <i className={classes2.socials + " fab fa-whatsapp"} />
            </Button>
            </a>
            <a href="https://web.facebook.com/pesantren.gombong" alt="facebook" target="_blank">
            <Button color="facebook">
              <i className={classes2.socials + " fab fa-facebook-square"} />
            </Button>
            </a>
            <a href="https://www.youtube.com/channel/UCMuxxsGqi1x9H3CxRC0OAcg" alt="youtube" target="_blank">
            <Button color="youtube">
              <i className={classes2.socials + " fab fa-youtube"} />
            </Button>
            </a>
            <a href="https://www.instagram.com/ponpes_wiriosoedarmo/" alt="instagram" target="_blank">
            <Button color="instagram">
              <i className={classes2.socials + " fab fa-instagram"} />
            </Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
