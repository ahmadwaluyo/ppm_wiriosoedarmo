import { cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const teamStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
    // background: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('https://firebasestorage.googleapis.com/v0/b/storageahmad-134a6.appspot.com/o/rsz_dsc_2730.jpg?alt=media&token=eec69b13-8564-49ee-bfaf-1feffac26383')",
  },
  title: {
    ...title,
    marginBottom: "4rem",
    minHeight: "32px",
    textDecoration: "none",
    // color: "#FFFFFF"
  },
  ...imagesStyle,
  itemGrid: {
    margin: "40px auto 20px auto"
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#333"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  margin5: {
    margin: "5px"
  }
};

export default teamStyle;
