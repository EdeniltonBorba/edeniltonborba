import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import landing from "assets/img/landing.jpg";
import profile from "assets/img/profile.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionServices() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6} className={classes.servicesStyle}>
                        <h2>Edenilton</h2>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} className={classes.servicesStyle}>
                        <h3>Edenilton</h3>

                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
