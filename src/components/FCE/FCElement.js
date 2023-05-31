import React from 'react';
import '../../styles/featuredContentElement.css';

const FCElement = ({imageUrl, imageAlt, heading, contentHtml}) => {

    return (
        <section className="FCElement">

                <div className="FCEBackground"></div>

            <div className="FCEContainer">
                <div className="FCEImageContainer">
                    <img src={imageUrl} alt={imageAlt}/>
                </div>
                <div className="FCECopyContainer">
                    <h2>{heading}</h2>
                    <div>{contentHtml}</div>
                </div>
            </div>
        </section>
    )

};

export default FCElement;