import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import Services from "./Sections/SectionServices.js";
import Portfolio from "./Sections/SectionPortfolio.js";
import Contact from "./Sections/SectionContact.js";
import CV from "views/Components/Sections/SectionCv.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
      <div>
        <Header
          brand="Edenilton Borba"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg2.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Edenilton Borba.</h1>
                  <h3 className={classes.subtitle}>
                    Full-stack Coding Bootcamp graduate at ESMT Berlin.
                </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>

          <div id="About" >
            <SectionBasics />
          </div>
          <div className={classes.typoTextTwo}>
            <h3>Would you like to know a little more about me? Then access the resume !!</h3>
          </div>
          <CV />
          <div className={classes.sections}>
            <div className={classes.container}>
              <div className={classes.typo}>
                <div className={classes.space70} />
                <h2 id="Services" className={classes.style70}>
                  Services
            <h3>What can I do for you?</h3>
                </h2>
              </div>
              <Services />

              <div className={classes.typo}>
                <div className={classes.space50} />
                <h2>
                  Portfolio
            <h3>My latest works</h3>
                </h2>
              </div>

              <Portfolio />

              <div className={classes.typo} id="Contact">
                <h2>
                  Contact
          </h2>
              </div>

            </div>

          </div>
          <Contact />
        </div>


        <Footer />
      </div>
    </div >
  );
}
