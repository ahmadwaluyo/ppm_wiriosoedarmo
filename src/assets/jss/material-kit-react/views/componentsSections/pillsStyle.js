import { container } from "assets/jss/material-kit-react.js";

const pillsStyle = {
  section: {
    padding: "70px 0",
    background: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('https://firebasestorage.googleapis.com/v0/b/storageahmad-134a6.appspot.com/o/rsz_dsc_2730.jpg?alt=media&token=eec69b13-8564-49ee-bfaf-1feffac26383')",
    color: "#FFFFFF"
  },
  container,
  table: {
    minWidth: 700,
  },
  titleSeparate: {
    height: "30vh", 
    background: "#FFF",
    width: "100%",
    paddingLeft: "10%",
    display: "flex",
    alignItems: "center"
  },
  titleNews: {
    height: "30%",
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Roboto Slab"
  },
  hr: {
    borderBottom: "1px solid #465161",
    width: "42px",
    position: "absolute"
  }
};

export default pillsStyle;
