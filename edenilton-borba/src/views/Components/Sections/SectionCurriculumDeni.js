import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import image from "assets/img/faces/FotoPerfil.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCurriculumDeni() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={2}>
                        <img
                            src={image}
                            alt="..."
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
                        />
                    </GridItem>
                </GridContainer>
                <GridContainer justify="center">
                    <h3>Edenilton Borba</h3>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12}>
                        <p>Date of birth: 06/04/1984</p>
                        <p>Nationality: Brazilian</p>
                        <p>Marital Status: Married with Two Children</p>
                        <p>Address: Berlin - Germany</p>
                        <p>WhatsApp: +49 174 3306573</p>
                        <p>E-mail: edeniltonborba.adm@gmail.com</p>
                    </GridItem>
                    <GridItem xs={12}>
                        <h4 className={classes.educationStyle}>Education</h4>
                        <p><span>09/2019 - 03/2020</span> ESMT Berlin, Berlin-Germany</p>
                        <p>Full Stack Web developer</p>
                        <br />
                        <p><span>09/2017 - 10/2017</span> Kapitel Zwei Deutsch Sprachshule Berlin, Berlin-Germany</p>
                        <p>German intensive course</p>
                        <br />
                        <p><span>02/2012 - 12/2015</span> UNIVILLE - Universidade da Região de Joinville-Brazil</p>
                        <p>Diploma in Business Administration</p>
                        <br />
                        <p><span>02/2001 - 12/2004</span> Escola Técnica Federal de Rio do Sul-Brazil</p>
                        <p>Agricultural Technician</p>

                    </GridItem>
                    <GridItem xs={12}>
                        <h4 className={classes.educationStyle}>Work Experience</h4>
                        <p><span>04/2018 - 10/2019</span> Butterhandlung Restaurant, Berlin-Germany</p>
                        <p>Management Consulting</p>
                        <br />
                        <p><span>10/2017 - 03/2018</span> Honey Box Catering, Berlin-Germany</p>
                        <p>Management Consulting</p>
                        <br />
                        <p><span>03/2014 - 12/2016</span> Du Xin Restauran, Joinville-Brazil</p>
                        <p>CEO</p>
                        <br />
                        <p><span>04/2013 - 12/2015</span> Portato Italian Fast Food, Joinville-Brazil</p>
                        <p>CEO</p>
                        <br />
                        <p><span>01/2005 - 03/2013</span> Tekinox Professional Kitchens, Joinville-Brazil</p>
                        <p>Controller</p>

                    </GridItem>
                    <GridItem xs={12}>
                        <h4 className={classes.educationStyle}>Other Skills</h4>
                        <h5>Languages</h5>
                        <p>Portugues <span> ( Native Language )</span></p>
                        <br />
                        <p>English</p>
                        <br />
                        <p>German</p>
                        <br />
                        <p>Spanish</p>
                        <br />


                    </GridItem>
                </GridContainer>


            </div>
        </div>
    );
}
