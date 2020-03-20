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
                            <div className={classes.note}>Front End Web Development</div>
                            <p>
                               
              Develop Front End using latest standards with HTML5/CSS3 with added funtionality using JavaScript and
              React.
            
                            </p>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <div className={classes.typo}>
                            <div className={classes.note}>Back End Web Development</div>
                            <p>
                                
              Develop Back End application/service using Node.js and SQL or NoSQL DB databases.
            
                            </p>
                        </div>

                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
