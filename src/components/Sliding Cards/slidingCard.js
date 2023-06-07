import { React, useState, useRef} from "react";
import {FaChevronUp} from 'react-icons/fa';
import '../../styles/slidingCard.css';


const SlidingCard = ({cardID, image, imageAlt, heading, shortDesc, longDesc, ctaText, cardNumber, index, active, changeActiveIndex, changeActiveCardNumber}) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const delay = () => {
        setIsExpanded(!isExpanded);
    }

    const contentContainer = useRef();
    const cardIcon = useRef();
    const cardContent = useRef();

    const growCard = (event) => {  
        if (!isExpanded) {
            contentContainer.current.style.height = '350px';
            cardContent.current.style.height = '250px';
            cardIcon.current.classList.add('rotated');
            setTimeout(delay, 550);
        }
    }

    const shrinkCard = (event) => {  
        if (isExpanded) {
            contentContainer.current.style.height = '200px';
            cardContent.current.style.height = '100px';
            cardIcon.current.classList.remove('rotated');
            setIsExpanded(!isExpanded);
        }
    }

    const updateStates = (index, number) => {
        changeActiveCardNumber(number)
        changeActiveIndex(index)
    }

    return (

        <div className={active ? "sCardContainer" : "sCardContainer inactiveCardContainer"} data-cardnumber={cardNumber} data-index={index}>
            {!active && <div className="sCardInactiveWrapper" onClick={() => updateStates(index, cardNumber)}></div>}
                <div className="sCardImgCont" data-id={`image-${cardID}`}>
                    <img className="sCardImg" src={image} alt={imageAlt}/>
                </div>
                <div ref={contentContainer} className={active ? "sCardContentCont" : "sCardContentCont inactiveCard"}>
                    {active &&
                        <>
                            {longDesc &&
                                <div className="sCardIcon" ref={cardIcon} onClick={isExpanded ? (event) => shrinkCard(event) : (event) => growCard(event) }>
                                    <FaChevronUp />
                                </div>
                            }
                            <h3 className="sCardHeading">{heading}</h3>
                            <div className="sCardContent" ref={cardContent}>
                                {!isExpanded && shortDesc}
                                {isExpanded && longDesc}
                            </div>
                            {ctaText && 
                                <div className="sCardCtaCont">
                                    <a className="linkCTA" href="#">{ctaText}</a>
                                </div>
                            }
                        </>
                    }
                    {!active &&
                        <h3 className="sCardHeading inactiveHeading">{heading}</h3>
                    }
                </div>
        </div>
    )
}

export default SlidingCard;