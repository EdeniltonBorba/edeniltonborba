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
            <h3 className={classes.textBase}>Knowledge Base</h3>
            <GridContainer>
                <GridItem xs={12} sm={6} md={4} lg={3}>
                    <div>
                        <h4>Frontend</h4>
                        <ul className={classes.cvBootCamp}>
                            <li>Html5</li>
                            <li>Css3</li>
                            <li>Bootstrap 3/4</li>
                            <li>Bulma</li>
                            <li>Material-UI</li>
                            <li>Styled Components</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>

                </GridItem>
                <GridItem xs={12} sm={6} md={4} lg={3}>
                    <div>
                        <h4>JavaScript</h4>
                        <ul className={classes.cvBootCamp}>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Gatsby.js</li>
                            <li>Next.js</li>
                        </ul>
                        <h4>Tools of the trade</h4>
                        <ul className={classes.cvBootCamp}>
                            <li>Visual Studio Code</li>
                        </ul>
                    </div>

                </GridItem>
                <GridItem xs={12} sm={6} md={4} lg={3}>
                    <div>
                        <h4>Server-side</h4>
                        <ul className={classes.cvBootCamp}>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                            <li>MariaDB</li>
                            <li>PostgreSQL</li>
                            <li>GraphQL</li>
                            <li>AWS Lambda</li>

                        </ul>
                    </div>
                </GridItem>
                <GridItem xs={12} sm={6} md={4} lg={3}>
                    <div>
                        <h4>Mobile</h4>
                        <ul className={classes.cvBootCamp}>
                            <li>React Native</li>
                        </ul>
                        <h4>Infrastructure</h4>
                        <ul className={classes.cvBootCamp}>
                            <li>Netlify</li>
                        </ul>
                        <h4>Currently learning</h4>
                        <ul className={classes.cvBootCamp}>
                            <li>GraphQL</li>
                            <li>...and so on</li>
                        </ul>
                    </div>
                </GridItem>
            </GridContainer>

        </div>
    )
}