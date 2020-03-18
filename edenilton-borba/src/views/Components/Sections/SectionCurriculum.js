import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

export default function SectionTypography() {

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={4} lg={3}>
                    <div>
                        <h4>Checkboxes</h4>
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