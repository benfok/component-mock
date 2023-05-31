import React from "react";
import "../../styles/sectionHeading.css";

const SectionHeading = ({heading, id}) => {

    return (
        <div id={id} className="heading-container">
            <h2>{heading}</h2>
        </div>
    )
} 

export default SectionHeading;