import React from "react";
import '../../styles/contentElement.css';


const BasicContent = ({heading, content, background}) => {
    return (
        <section className="contentElement">
            <div className={background ? "contentCopyContainer contentBg" : "contentCopyContainer"}>
                {background && <div className="top-slope"></div>}
                <h3>{heading}</h3>
                <div>{content}</div>
                {background && <div className="bottom-slope"></div>}
            </div>
        </section>
    )
}

export default BasicContent;