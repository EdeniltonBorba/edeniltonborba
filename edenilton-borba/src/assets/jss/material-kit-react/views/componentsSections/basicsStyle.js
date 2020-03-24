import { container, title } from "assets/jss/material-kit-react.js";


const basicsStyle = {
  sections: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "20px",
    minHeight: "32px",
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

  cvBootCamp: {
    fontSize: "16px"
  },

  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
};

export default basicsStyle;
