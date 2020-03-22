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
                <GridContainer justify="center">
                    <GridItem xs={12} sm={2}>
                        <img
                            src={image}
                            alt="..."
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
                        />
                    </GridItem>
                </GridContainer>
                <GridContainer justify="center">
                    <h3>Edenilton Borba</h3>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12}>
                        <p>Date of birth: 06/04/1984</p>
                        <p>Nationality: Brazilian</p>
                        <p>Marital Status: Married with Two Children</p>
                        <p>Address: Berlin - Germany</p>
                        <p>WhatsApp: +49 174 3306573</p>
                        <p>E-mail: edeniltonborba.adm@gmail.com</p>
                    </GridItem>
                </GridContainer>

            </div>
        </div>
    );
}
