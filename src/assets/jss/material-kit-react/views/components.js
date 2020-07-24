import { container } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  container: {
    width: "100%",
    marginTop: "5%"
  },
  // container,
  brand: {
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )",
    padding: 20,
  },
  linkBrand: {
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )",
    padding: 20,
    margin: "20px 3px",
    height: "25vh",
    width: "32%",
    "&:hover": {
      background: "#000000"
    }
  },
  title: {
    fontSize: "3.2rem",
    fontWeight: "500",
    display: "inline-block",
    position: "relative",
    fontFamily: "Arvo",
    color: "#ffcc00"
  },
  subtitle: {
    fontSize: "1.413rem",
    fontWeight: "400",
    margin: "6px 0 0",
    fontStyle: "italic"
  },
  linkTitle: {
    fontSize: "1.413rem",
    fontWeight: "700",
    fontSize: "24px",
    fontFamily: "Roboto Slab",
    lineHeight: "30px",
    textTransform: "uppercase",
    color: "#ffffff",
    paddingTop: 30,
    margin: "6px 0 0",
  },
  startedLink: {
    backgroundColor: "#ffcc00",
    color: "#333333",
    fontWeight: "500",
    "&:hover": {
      background: "transparent",
      color: "#ffcc00"
    }
  },
  btnLink: {
    color: "#ffb606",
    fontWeight: "700",
    fontFamily: "Roboto",
    marginBottom: 25,
    "&:hover" : {
      color: "#ffb606",
      textDecoration: "underline"
    }
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "0px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center"
  },
  backgroundHeader: {
  }
};

export default componentsStyle;