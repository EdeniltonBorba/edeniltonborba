import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBootCamp() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h4>
                            Born in Brazil and currently living in Berlin - Germany,
                            I have more than 10 years of experience as a manager and consultant in business management in various areas
                            such as organizational and financial administration and <span className={classes.loveTec}>love of technology</span>.
                            Looking for an opportunity to start working as a <span className={classes.fullStack}>Full Stack Web developer</span>.
            </h4>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
