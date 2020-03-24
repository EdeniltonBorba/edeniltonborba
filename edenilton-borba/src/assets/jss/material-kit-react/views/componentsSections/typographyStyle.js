import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const typographyStyle = {
  section: {
    padding: "30px 0 5px"
  },

  sectionContact: {
    padding: "0"
  },

  container,
  space50: {
    height: "50px",
    display: "block"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  typo: {
    paddingLeft: "10%",
    marginBottom: "40px",
    position: "relative",
    width: "100%"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  sectionText: {
    padding: "0px"
  },
  typoText: {
    paddingLeft: "20%",
    marginBottom: "5px",
    position: "relative",
    width: "100%",
    fontSize: "1.5625rem",
    marginTop: "-230px",
    marginRight: "135px"
  },

  typoTextTwo: {
    paddingLeft: "14%",
    marginBottom: "5px",
    position: "relative",
    width: "100%",
    fontSize: "1.5625rem",
  },

  nickName: {
    backgroundColor: 'darkgray',
    padding: '0 10px'

  },

  loveTec: {
    backgroundColor: 'darkgray',
    padding: '0 10px'
  },

  fullStack: {
    backgroundColor: 'dimgrey',
    padding: '0 10px',
    color: 'aliceblue',
  },

  marginCenter: {
    margin: "center !important"
  },

  gridAvatar: {
    marginTop: "-100px",
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  },
  modalTitle: {
    fontSize: "20px",
  },
  educationStyle: {
    borderBottom: "1px solid #ccc!important",
    borderColor: "#f44336!important",
  },
  pStyle: {
    padding: "0",
  },

  marginLeft: {
    marginLeft: "left !important"
  },
  ...imagesStyles
};

export default typographyStyle;
