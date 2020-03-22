import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";
import Avatar from "./SectionAvatarContact.js";

const useStyles = makeStyles(styles);

export default function SectionContact() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <Card>
                            <form className={classes.form}>
                                <CardHeader color="primary" className={classes.cardHeader}>

                                    <h4>Follow me</h4>
                                    <div className={classes.socialLine}>
                                        <Button
                                            justIcon
                                            href="https://www.linkedin.com/in/edenilton-borba-861a9b18a/"
                                            target="_blank"
                                            color="transparent"
                                        >
                                            <i className={classes.socialIcons + " fab fa-linkedin"} />
                                        </Button>
                                        <Button
                                            justIcon
                                            href="https://github.com/EdeniltonBorba"
                                            target="_blank"
                                            color="transparent"
                                        >
                                            <i className={classes.socialIcons + " fab fa-github"} />
                                        </Button>
                                        <Button
                                            justIcon
                                            href="https://twitter.com/EdeniltonBorba_"
                                            target="_blank"
                                            color="transparent"
                                        >
                                            <i className={classes.socialIcons + " fab fa-twitter"} />
                                        </Button>
                                        <Button
                                            justIcon
                                            href="#pablo"
                                            target="_blank"
                                            color="transparent"
                                        >
                                            <i className={classes.socialIcons + " fab fa-facebook"} />
                                        </Button>
                                        <Button
                                            justIcon
                                            href="https://www.instagram.com/edenilton_borba/"
                                            target="_blank"
                                            color="transparent"
                                        >
                                            <i
                                                className={
                                                    classes.socialIcons + " fab fa-instagram"
                                                }
                                            />
                                        </Button>
                                    </div>
                                </CardHeader>
                                <p className={classes.divider}>Or Be Classical</p>
                                <CardBody>
                                    <div className={classes.contactStyle}>
                                        <Email /> edeniltonborba.adm@gmail.com
                                    </div>
                                    <br />

                                    <h4>+49 174 3306573</h4>
                                </CardBody>

                            </form>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div >
    );
}
