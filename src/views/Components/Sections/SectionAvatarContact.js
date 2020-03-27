import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import image from "assets/img/Deni.jpg";
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
                                alt="Edenilton"
                                className={classes.imgRoundedCircle + " " + classes.imgFluid}
                            />
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
