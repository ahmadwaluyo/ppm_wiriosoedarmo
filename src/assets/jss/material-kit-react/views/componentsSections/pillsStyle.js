import { container } from "assets/jss/material-kit-react.js";

const pillsStyle = {
  section: {
    padding: "70px 0",
    background: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('https://firebasestorage.googleapis.com/v0/b/storageahmad-134a6.appspot.com/o/cover%2FDSC_2735.JPG?alt=media&token=c3cca309-8eaa-4d27-bd17-a13188ed53b3')",
    color: "#FFFFFF",
    backgroundSize: "cover",
  },
  sectionAdmission: {
    padding: "70px 0",
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
  titleSeparateAdmission: {
    background: "#FFF",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  titleNews: {
    height: "30%",
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Roboto Slab"
  },
  titleNewsAdmission: {
    height: "20%",
    fontSize: "30px",
    fontWeight: 700,
    fontFamily: "Roboto Slab",
    lineHeight: "30px",
    color: "#333333",
    textTransform: "uppercase"
  },
  hr: {
    borderBottom: "1px solid #465161",
    width: "42px",
    // paddingTop: 16,
    position: "absolute"
  }
};

export default pillsStyle;
