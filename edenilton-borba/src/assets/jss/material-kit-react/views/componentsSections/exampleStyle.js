import { conatinerFluid } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const exampleStyle = {
  section: {
    width: "100%",
    position: "relative",
    flexBasis: "auto",
    minHeight: "1px",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  container: {
    ...conatinerFluid,
    textAlign: "center !important",
  },

  servicesStyle: {
    color: "#555",
    width: "100%",
    border: "0",
    display: "flex",
    padding: "0.625rem 0",
    zIndex: "unset",
    position: "relative",
    flexFlow: 'row nowrap',
    boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    borderRadius: "3px",
    marginBottom: "20px",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  ...imagesStyle,
  link: {
    textDecoration: "none"
  }
};

export default exampleStyle;
