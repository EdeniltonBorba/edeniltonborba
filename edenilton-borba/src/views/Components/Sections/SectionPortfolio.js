import React from "react";
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
                        <a href="https://goodwork.netlify.com/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <img
                                src={GoodWork}
                                alt="GoodWork"
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
                        </a>
                        <p className={classes.pStyle}>Platform that connection service providers to customers.</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://github.com/EdeniltonBorba/Supermarket" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <img
                                src={Supermarket}
                                alt="Navio"
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                Navio
                            </Button>
                        </a>
                        <p className={classes.pStyle}>Platform for e-commerce.</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://edeniltonborba.github.io/CodeQuiz/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <img
                                src={CodeQuiz}
                                alt="Code Quiz"
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
                        </a>
                        <p className={classes.pStyle}>The challenge was to create a code test with multiple choice questions.</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://edeniltonborba.github.io/Word-Guess-Game/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <img
                                src={WordGuessGame}
                                alt="World Guess Game"
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
                        </a>
                        <p className={classes.pStyle}>The game consists of you guessing the title of the song, the tips to guess are; Rock classics between the 70's and 90's.</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://github.com/EdeniltonBorba/Supermarket" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <img
                                src={DayPlanner}
                                alt="Day Planner"
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
                        </a>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://github.com/EdeniltonBorba/Supermarket" target="_blank" rel="noopener noreferrer" className={classes.link}>
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
                        </a>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://github.com/EdeniltonBorba/Supermarket" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <img
                                href="https://www.linkedin.com/in/edenilton-borba-861a9b18a/"
                                src={GeneratorProfile}
                                alt="Developer Profile Generator"
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button
                                href="https://www.linkedin.com/in/edenilton-borba-861a9b18a/"
                                color="primary" size="lg" simple
                                target="_blank">
                                Developer Profile Generator
                            </Button>
                        </a>
                        <p className={classes.pStyle}>Command-line application that dynamically generates a PDF profile from a GitHub username.</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://github.com/EdeniltonBorba/Supermarket" target="_blank" rel="noopener noreferrer" className={classes.link}>
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
                        </a>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://github.com/EdeniltonBorba/Supermarket" target="_blank" rel="noopener noreferrer" className={classes.link}>
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
                        </a>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://github.com/EdeniltonBorba/Supermarket" target="_blank" rel="noopener noreferrer" className={classes.link}>
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
                        </a>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://github.com/EdeniltonBorba/Supermarket" target="_blank" rel="noopener noreferrer" className={classes.link}>
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
                        </a>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://github.com/EdeniltonBorba/Supermarket" target="_blank" rel="noopener noreferrer" className={classes.link}>
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
                        </a>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://github.com/EdeniltonBorba/Supermarket" target="_blank" rel="noopener noreferrer" className={classes.link}>
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
                        </a>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://github.com/EdeniltonBorba/Supermarket" target="_blank" rel="noopener noreferrer" className={classes.link}>
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
                        </a>
                    </GridItem>

                </GridContainer>
            </div>
        </div>
    );
}
