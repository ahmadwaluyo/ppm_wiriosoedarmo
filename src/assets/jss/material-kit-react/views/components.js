import { container } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )",
    padding: 20,
    borderRadius:"6px"
  },
  title: {
    fontSize: "3.2rem",
    fontWeight: "500",
    display: "inline-block",
    position: "relative",
  },
  subtitle: {
    fontSize: "1.413rem",
    fontWeight: "400",
    margin: "6px 0 0",
    fontStyle: "italic"
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
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  backgroundHeader: {
  }
};

export default componentsStyle;

// quote: {
//   padding: "10px 20px",
//   margin: "0 0 20px",
//   fontSize: "17.5px",
// },
// quoteText: {
//   margin: "0 0 10px",
// },
// quoteAuthor: {
//   display: "block",
//   fontSize: "80%",
//   lineHeight: "1.42857143",
//   color: "#777"
// },