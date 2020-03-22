import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import image from "assets/img/faces/FotoPerfil.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCurriculumDeni() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem xs={12} sm={2} className={classes.marginLeft}>
                        <h4>Circle Image</h4>
                        <img
                            src={image}
                            alt="..."
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
