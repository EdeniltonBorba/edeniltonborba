import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import DayPlanner from "assets/img/DayPlanner.jpg";
import GoodWork from "assets/img/goodwork.jpg";
import GeneratorProfile from "assets/img/DevProfileGenerator.jpg";
import Supermarket from "assets/img/Supermarket.jpg";
import CodeQuiz from "assets/img/CodeQuiz.jpg";
import WordGuessGame from "assets/img/WordGuessGame.jpg";
import SearchAPI from "assets/img/SearchAPIWorked.jpg";
import EmployeeTracker from "assets/img/EmployeeTracker.jpg";
import NodeExpress from "assets/img/NodeExpress.jpg";
import NoteTaker from "assets/img/NoteTaker.jpg";
import TemplateEngine from "assets/img/TemplateEngine.jpg";
import WorkoutTracker from "assets/img/WorkoutTracker.jpg";
import LastMinuteTrip from "assets/img/LastMinuteTrip.jpg";
import UnderConstructor from "assets/img/UnderConstruction.jpg";
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
                        <a href="https://edeniltonborba.github.io/Day-Planner/" target="_blank" rel="noopener noreferrer" className={classes.link}>
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
                        <p className={classes.pStyle}>A simple calendar application that allows the user to save events for each hour of the day.</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://github.com/snufka/LastMinuteTrip" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <img
                                src={LastMinuteTrip}
                                alt="Last Minute Trip"
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
                        <p className={classes.pStyle}>The user chooses a vacation destination based on his favorite activities and weather.</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://github.com/EdeniltonBorba/Developer_Profile_Generator" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <img
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
                            <Button color="primary" size="lg" simple>
                                Developer Profile Generator
                            </Button>
                        </a>
                        <p className={classes.pStyle}>Command-line application that dynamically generates a PDF profile from a GitHub username.</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://pfdzm.github.io/NYTimesSearch/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <img
                                src={SearchAPI}
                                alt="Search API"
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                NY Times Search
                            </Button>
                        </a>
                        <p className={classes.pStyle}>Search the NY Times archive using their Search API Worked.</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://github.com/EdeniltonBorba/Employee-Tracker" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <img
                                src={EmployeeTracker}
                                alt="Employee Tracker"
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                Employee Tracker
                            </Button>
                        </a>
                        <p className={classes.pStyle}>Solution for managing employees of a company using the node, the inquirer and MySQL.</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://github.com/EdeniltonBorba/Node-Express-Handlebars" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <img
                                src={NodeExpress}
                                alt="Node Express"
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                Node Express Handlebars
                            </Button>
                        </a>
                        <p className={classes.pStyle}>A burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!).</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://github.com/EdeniltonBorba/Note-Taker" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <img
                                src={NoteTaker}
                                alt="Note Taker"
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                Note Taker
                            </Button>
                        </a>
                        <p className={classes.pStyle}>An application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://github.com/EdeniltonBorba/Template-Engine" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <img
                                src={TemplateEngine}
                                alt="Template Engine"
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                Template Engine
                            </Button>
                        </a>
                        <p className={classes.pStyle}>A Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="https://github.com/EdeniltonBorba/Workout-Tracker" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <img
                                src={WorkoutTracker}
                                alt="Workout Tracker"
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluidStyle
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                Workout Tracker
                            </Button>
                        </a>
                        <p className={classes.pStyle}>A workout tracker. Was created Mongo database with a Mongoose schema and handle routes with Express.</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <a href="#" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <img
                                src={UnderConstructor}
                                alt="Under Construction"
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
