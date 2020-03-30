import React from "react";
import GridItem from "components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import Curriculum from "./SectionCurriculum.js";
import image from "assets/img/faces/FotoPerfil.jpg";
import GridContainer from "components/Grid/GridContainer.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
    const classes = useStyles();

    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={2}>
                        <img
                            src={image}
                            alt="Edenilton"
                            className={
                                classes.imgRaised +
                                " " +
                                classes.imgRoundedCircle +
                                " " +
                                classes.imgFluid
                            }
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={10}>
                        <div className={classes.typoText}>
                            <h3>My name is Edenilton Borba. This is very long, so I mainly use <span className={classes.nickName}>Deni</span>.</h3>
                            <h4>
                                Born in Brazil and currently living in Berlin - Germany,
                                I have more than 10 years of experience as a manager and consultant in business management in various areas
                                such as organizational and financial administration and recently graduated in <span className={classes.loveTec}>full-stack</span> coding Bootcamp at <span className={classes.esmtStyle}>ESMT Berlin</span>.
                            </h4>
                        </div>
                    </GridItem>
                </GridContainer>
                <GridContainer
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <GridItem xs={12} sm={12} md={10}>
                        <Curriculum />
                    </GridItem>

                    <div id="resume" className={classes.typoTextTwo}>
                        <h3>Looking for an opportunity to start working as a <span className={classes.fullStack}>Full Stack Web developer</span>.</h3>
                    </div>
                </GridContainer>
            </div>
        </div>

    );
}
