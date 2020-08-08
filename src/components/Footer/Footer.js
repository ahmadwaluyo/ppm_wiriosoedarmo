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
            PPM Wiriosoedarmo
          </a>
        </div>
        <div className={classes.center}>
          <div className={classes2.textCenter + " " + classes2.sharingArea}>
            <GridContainer justify="center">
              <h3>Thank you for visiting us!</h3>
            </GridContainer>
            <Button color="twitter">
              <i className={classes2.socials + " fab fa-whatsapp"} />
            </Button>
            <Button color="facebook">
              <i className={classes2.socials + " fab fa-facebook-square"} />
            </Button>
            <Button color="google">
              <i className={classes2.socials + " fab fa-youtube"} />
            </Button>
            <Button color="instagram">
              <i className={classes2.socials + " fab fa-instagram"} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
