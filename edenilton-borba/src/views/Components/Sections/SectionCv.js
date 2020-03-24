import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CurriculumDeni from "./SectionCurriculumDeni.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function SectionCv() {
    const classes = useStyles();
    const [classicModal, setClassicModal] = React.useState(false);
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6} lg={4}>
                                <Button
                                    color="primary"
                                    block
                                    onClick={() => setClassicModal(true)}
                                >
                                    <LibraryBooks className={classes.icon} />
                                    Resume
                </Button>
                                <Dialog
                                    classes={{
                                        root: classes.center,
                                        paper: classes.modal
                                    }}
                                    open={classicModal}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={() => setClassicModal(false)}
                                    aria-labelledby="classic-modal-slide-title"
                                    aria-describedby="classic-modal-slide-description"
                                >
                                    <DialogTitle
                                        id="classic-modal-slide-title"
                                        disableTypography
                                        className={classes.modalHeader}
                                    >
                                        <IconButton
                                            className={classes.modalCloseButton}
                                            key="close"
                                            aria-label="Close"
                                            color="inherit"
                                            onClick={() => setClassicModal(false)}
                                        >
                                            <Close className={classes.modalClose} />
                                        </IconButton>
                                        <CurriculumDeni />
                                    </DialogTitle>
                                    <DialogContent
                                        id="classic-modal-slide-description"
                                        className={classes.modalBody}
                                    >
                                    </DialogContent>
                                    <DialogActions className={classes.modalFooter}>
                                        <Button
                                            onClick={() => setClassicModal(false)}
                                            color="danger"
                                            simple
                                        >
                                            Close
                    </Button>
                                    </DialogActions>
                                </Dialog>
                            </GridItem>
                        </GridContainer>

                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
