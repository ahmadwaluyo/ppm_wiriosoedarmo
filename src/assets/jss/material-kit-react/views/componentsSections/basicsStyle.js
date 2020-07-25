import { container, title } from "assets/jss/material-kit-react.js";
import customCheckboxRadioSwitch from "assets/jss/material-kit-react/customCheckboxRadioSwitch.js";

const basicsStyle = {
  sections: {
    height: "100vh",
    paddingTop: "100px"
  },
  container,
  title: {
    ...title,
    marginTop: "10px",
    minHeight: "70px",
    textDecoration: "none"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  hr: {
    borderBottom: "1px solid #465161",
    width: "42px",
    position: "absolute"
  },
  ...customCheckboxRadioSwitch
};

export default basicsStyle;
