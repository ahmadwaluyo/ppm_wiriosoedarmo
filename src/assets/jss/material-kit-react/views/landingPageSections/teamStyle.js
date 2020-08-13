import { cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const teamStyle = {
  section: {
    padding: "70px 0 20px 0",
    textAlign: "center",
    // background: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('https://firebasestorage.googleapis.com/v0/b/storageahmad-134a6.appspot.com/o/rsz_dsc_2730.jpg?alt=media&token=eec69b13-8564-49ee-bfaf-1feffac26383')",
  },
  title: {
    ...title,
    marginBottom: "4rem",
    minHeight: "32px",
    fontSize: "32px",
    lineHeight: "40px",
    textDecoration: "none",
    textTransform: "uppercase",
    color: "#333333"
  },
  ...imagesStyle,
  itemGrid: {
    margin: "40px auto 20px auto"
  },
  itemGridPartnership: {
    margin: "30px auto"
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
  },
  containerSlider: {
    backgroundColor: "#c9c9c9",
  },
  hr: {
    borderBottom: "1px solid #465161",
    width: "42px",
    lineHeight: "100px"
  }
};

export default teamStyle;
