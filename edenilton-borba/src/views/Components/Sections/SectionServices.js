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
                    <GridItem xs={12} sm={12} md={6}>
                        <div className={classes.typo}>
                            <p>
                                I will be the leader of a company that ends up being worth
                                billions of dollars, because I got the answers. I understand
                                culture. I am the nucleus. I think that’s a responsibility that
                                I have, to push possibilities, to show people, this is the level
                                that things could be at.
                            </p>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <div className={classes.typo}>
                            <p>
                                I will be the leader of a company that ends up being worth
                                billions of dollars, because I got the answers. I understand
                                culture. I am the nucleus. I think that’s a responsibility that
                                I have, to push possibilities, to show people, this is the level
                                that things could be at.
                            </p>
                        </div>

                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
