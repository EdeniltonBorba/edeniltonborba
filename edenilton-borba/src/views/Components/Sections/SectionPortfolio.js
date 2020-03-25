import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import DayPlanner from "assets/img/DayPlanner.png";
import GoodWork from "assets/img/goodwork.png";
import GeneratorProfile from "assets/img/Dev Profile Generator.png";
import Supermarket from "assets/img/Supermarket.png";
import CodeQuiz from "assets/img/CodeQuiz.png";
import WordGuessGame from "assets/img/WordGuessGame.png";
import SearchAPI from "assets/img/Search API Worked.png";
import EmployeeTracker from "assets/img/EmployeeTracker.png";
import NodeExpress from "assets/img/NodeExpress.png";
import NoteTaker from "assets/img/NoteTaker.png";
import TemplateEngine from "assets/img/TemplateEngine.png";
import WorkoutTracker from "assets/img/WorkoutTracker.png";
import LastMinuteTrip from "assets/img/LastMinuteTrip.png";
import UnderConstructor from "assets/img/UnderConstruction.png";
import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";


const useStyles = makeStyles(styles);

export default function SectionExamples() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6}>
                        <Link to="landing-page" className={classes.link}>
                            <img
                                src={GoodWork}
                                alt="..."
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                GoodWork
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Link to="landing-page" className={classes.link}>
                            <img
                                src={Supermarket}
                                alt="..."
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                View profile page
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Link to="landing-page" className={classes.link}>
                            <img
                                src={CodeQuiz}
                                alt="..."
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                Code Quiz
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Link to="landing-page" className={classes.link}>
                            <img
                                src={WordGuessGame}
                                alt="..."
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                Word Guess Game
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Link to="landing-page" className={classes.link}>
                            <img
                                src={DayPlanner}
                                alt="..."
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                Day Planner
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Link to="landing-page" className={classes.link}>
                            <img
                                src={LastMinuteTrip}
                                alt="..."
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                Last Minute Trip
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Link to="landing-page" className={classes.link}>
                            <img
                                src={GeneratorProfile}
                                alt="..."
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                View landing page
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Link to="landing-page" className={classes.link}>
                            <img
                                src={SearchAPI}
                                alt="..."
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                View landing page
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Link to="landing-page" className={classes.link}>
                            <img
                                src={EmployeeTracker}
                                alt="..."
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                View landing page
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Link to="landing-page" className={classes.link}>
                            <img
                                src={NodeExpress}
                                alt="..."
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                View landing page
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Link to="landing-page" className={classes.link}>
                            <img
                                src={NoteTaker}
                                alt="..."
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                View landing page
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Link to="landing-page" className={classes.link}>
                            <img
                                src={TemplateEngine}
                                alt="..."
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                View landing page
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Link to="landing-page" className={classes.link}>
                            <img
                                src={WorkoutTracker}
                                alt="..."
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                View landing page
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Link to="landing-page" className={classes.link}>
                            <img
                                src={UnderConstructor}
                                alt="..."
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                Under construction
                            </Button>
                        </Link>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
