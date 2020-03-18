import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function SectionCurriculum() {
    const classes = useStyles();

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={4} lg={3}>
                    <div>
                        <h4>Frontend</h4>
                        <ul className={classes.cvBootCamp}>
                            <li>Bootstrap 3/4</li>
                            <li>Bulma</li>
                            <li>Emotion</li>
                            <li>Styled Components</li>
                            <li>Tailwind CSS</li>
                        </ul>

                    </div>

                </GridItem>
                <GridItem xs={12} sm={6} md={4} lg={3}>
                    <div>
                        <h4>Checkboxes</h4>
                    </div>

                </GridItem>
            </GridContainer>

        </div>
    )
}