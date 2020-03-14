import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
    const classes = useStyles();

    return (
        <div className={classes.sectionText}>
            <div className={classes.container}>
                <div id="typography">
                    <GridContainer>
                        <div className={classes.typoText}>
                            <h3>My name is Edenilton Borba. This is very long, so I mainly use Deni.</h3>
                        </div>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
