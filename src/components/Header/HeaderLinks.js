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
import MediaQuery from "react-responsive";
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
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
              Sambutan Mudir
            </Link>,
            <Link to="/jenjang-pendidikan" className={classes.dropdownLink}>
              Jenjang Pendidikan
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
              <Link to="/pembayaran" className={classes.dropdownLink}>
                Info Pembayaran
              </Link>,
              <Link to="/perijinan" className={classes.dropdownLink}>
                Perijinan
              </Link>,
              <Link to="/login-page" className={classes.dropdownLink}>
                Login
              </Link>
            ]}
          />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
            noLiPadding
            buttonText="Article & News"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={Description}
            dropdownList={[
              <Link to="/blog" className={classes.dropdownLink}>
                Blog
              </Link>,
              <Link to="/news" className={classes.dropdownLink}>
                News
              </Link>
            ]}
          />
      </ListItem>
      <ListItem className={classes.listItem}>
          <Link
            to="/galery"
            className={classes.navLink}
          >
          <PhotoLibrary className={classes.icons} /> Galery
          </Link>
      </ListItem>
    </List>
    </MediaQuery>
  );
}
