import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import image from "assets/img/faces/FotoPerfil.jpg";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import TextProfile from "views/Components/Sections/SectionTextProfile.js";

const useStyles = makeStyles(styles);

export default function SectionAvatarProfile() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <div id="images">
                    <GridContainer>
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
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
                        <TextProfile />
                    </GridContainer>
                    <GridContainer />
                </div>
            </div>
        </div>
    );
}
