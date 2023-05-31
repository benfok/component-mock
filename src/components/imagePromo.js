import React from "react";
import "../styles/imagePromo.css";

const ImagePromo = ({heading, image, content, ctaText, ctaLink}) => {

    const styles = {
        backgroundImage: `url(${image})`
    }

    return (
        <div className="image-promo-container" style={styles}>
            <div className="image-promo-overlay"></div>
            <div className="image-promo-content-container">
                <div className="image-promo-content">
                    <h3>{heading}</h3>
                    <div>{content}</div>
                    {ctaLink &&
                        <div className="image-promo-cta-container">
                            <a className="btn primaryCTA" style={{display: "block"}} href={ctaLink}>{ctaText}</a>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
} 

export default ImagePromo;