/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Info, Home, LaptopMac, PhotoLibrary, Description } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
          <Link to="/" className={classes.navLink} color="transparent">
            <Home className={classes.icons} /> Home
          </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Tentang Kami"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Info}
          dropdownList={[
            <Link to="/sejarah" className={classes.dropdownLink}>
              Sejarah
            </Link>,
            <Link to="/visimisi" className={classes.dropdownLink}>
              Visi Misi
            </Link>,
            <Link to="/fasilitas" className={classes.dropdownLink}>
              Fasilitas
            </Link>,
            <Link to="/sambutan" className={classes.dropdownLink}>
              Sambutan Mudhir
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
            noLiPadding
            buttonText="Service Online"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={LaptopMac}
            dropdownList={[
              <Link to="/admission" className={classes.dropdownLink}>
                Pendaftaran
              </Link>,
              <Link to="/" className={classes.dropdownLink}>
                Info Pembayaran
              </Link>,
              <Link to="/" className={classes.dropdownLink}>
                Kalender Akademik
              </Link>,
              <Link to="/login-page" className={classes.dropdownLink}>
                Login
              </Link>
            ]}
          />
      </ListItem>
      <ListItem className={classes.listItem}>
          <Link to="/landing-page" className={classes.navLink} color="transparent">
            <Description className={classes.icons} /> Article
          </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Link
            to="/profile-page"
            className={classes.navLink}
          >
          <PhotoLibrary className={classes.icons} /> Galery
          </Link>
      </ListItem>
    </List>
  );
}
