import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Curriculum from "./SectionCurriculum.js";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
    const classes = useStyles();

    return (
        <div className={classes.sectionText}>
            <div className={classes.container}>
                <div id="typography">
                    <GridContainer>
                        <div className={classes.typoText}>
                            <h3>My name is Edenilton Borba. This is very long, so I mainly use <span className={classes.nickName}>Deni</span>.</h3>
                            <h4>
                                Born in Brazil and currently living in Berlin - Germany,
                                I have more than 10 years of experience as a manager and consultant in business management in various areas
                                such as organizational and financial administration and recently graduated in <span className={classes.loveTec}> full-stack </span> coding Bootcamp at ESMT Berlin.
                            </h4>

                            <h3>Knowledge Base</h3>

                            <Curriculum justify="center"
                                alignItems="center" />
                        </div>
                        <div className={classes.typoTextTwo}>
                            <h3>Looking for an opportunity to start working as a <span className={classes.fullStack}>Full Stack Web developer</span>.</h3>
                            <h3>Would you like to know a little more about me? Then access the resume !!</h3>
                        </div>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
