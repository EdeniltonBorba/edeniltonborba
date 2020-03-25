import { conatinerFluid } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const exampleStyle = {
  section: {
    padding: "20px 0",
  },
  container: {
    ...conatinerFluid,
    textAlign: "center !important",
  },

  pStyle: {
    fontSize: "14px",
    marginTop: "-20px",
    marginBottom: "50px",
  },

  linkGit: {
    href: "https://github.com/EdeniltonBorba/Developer_Profile_Generator"
  },

  ...imagesStyle,
  link: {
    textDecoration: "none"
  }
};

export default exampleStyle;
