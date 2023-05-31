import React from "react";
import '../../styles/enhancedFCE.css';
import useObserver from "../../hooks/useObserver";
import useMedia from "../../hooks/useMedia.js";


const EnhancedFCE = ({heading, content, image, imageAlt, background}) => {
    
    // determine if screen size is less than 1080px and render accordingly
    const isMobile = useMedia('(max-width: 1025px)');

    // call in the custom useoberver hook to create the wipe in animation on the image
    const [containerRef, isVisible] = useObserver({
        root: null,
        rootmMargin: '0px',
        threshold: 0.5
    })

    return (
        <section className="enhancedFCE">
            <div className="enhancedFCEBgGradient"></div>
            <div className="enhancedFCEContentContainer">            
                <div className="eFCECopyContainer">
                    <h3>{heading}</h3>
                    <div>{content}</div>
                </div>
                {!isMobile && <div className="eFCEImageContainer" ref={containerRef} style={isVisible ? {backgroundColor : 'white'} : {backgroundColor : '#144276'}}>
                    <img src={image} alt={imageAlt} className={isVisible ? 'active' : ''}/>
                </div>}
                {isMobile && <div className="eFCEImageContainer" style={{backgroundColor : 'white'}}>
                    <img src={image} alt={imageAlt} className="active" />
                </div>}
            </div>
        </section>
    )
}

export default EnhancedFCE;