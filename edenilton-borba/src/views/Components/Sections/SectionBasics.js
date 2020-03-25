import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Quote from "components/Typography/Quote.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import AvatarProfile from "views/Components/Sections/SectionAvatarProfile.js";



const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>About Me</h2>
        </div>
        <div className={classes.typo}>
          <div className={classes.note} />
          <Quote
            text="If you have an orange and trade with another person who also has an orange, each one
            gets one orange.But if you have an idea and trade with another person who also has an idea, each one gets
          two."
            author=" Confúcio"
          />
        </div>

        <AvatarProfile />

      </div>
    </div>
  );
}
