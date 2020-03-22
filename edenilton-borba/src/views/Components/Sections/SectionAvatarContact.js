import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionAvatarContact() {
    const classes = useStyles();
    return (
        <div className={classes.sectionContact}>
            <div className={classes.container}>
                <div id="typography">
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={7} className={classes.gridAvatar}>
                            <img
                                src={image}
                                alt="..."
                                className={classes.imgRoundedCircle + " " + classes.imgFluid}
                            />
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
