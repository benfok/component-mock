import React, { useEffect, useRef, useState } from 'react';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import useMedia from '../../hooks/useMedia';

import '../../styles/slidingCard.css';
import SlidingCard from './slidingCard';

const SlidingCardContainer = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [activeCardNumber, setActiveCardNumber] = useState(1);
    const [reelPosition, setReelPosition] = useState(-1030)
    const [viewportSize, setViewportSize] = useState(null);

    // set the viewportSize state when the window is resized
    const flagResize = () => {
        setViewportSize(window.innerWidth)
    }

    // delay the state update to avoid redundant rerenders
    const delay = () => {setTimeout(flagResize, 500)}
    // add event listener to window resize
    window.addEventListener('resize', delay);

    // recalculate and reset the carousel position if the window is resized
     useEffect(() => {
        function resetReelPosition() {
            setReelPosition(calculateCarouselOffset(activeIndex))
        }
        resetReelPosition();
    }, [viewportSize]);

    const calculateCarouselOffset = (value) => {
        const numCardsToLeft = (value - (numberOfCards * -1));
        const centerOfCard = (numCardsToLeft * 280) + 140;
        const viewportWidth = window.innerWidth;
        const wrapperWidth = window.getComputedStyle(cardWrapper.current).getPropertyValue('width');
        const marginLeft = (viewportWidth - parseInt(wrapperWidth.substring(0,wrapperWidth.length-2))) / 2
        const offset = (centerOfCard + marginLeft - (viewportWidth /2)) * -1;
        // console.log(offset)
        // offset = 280(card width) * number of cards to the left, plus half a card (to find cetner point of card in frame), then minus half the viewport, plus the left margin of the wrapper
        return offset
    }

    const changeActiveIndex = (value) => {
        setReelPosition(calculateCarouselOffset(value))
        setActiveIndex(value);
    }

    const changeActiveCardNumber = (number) => {
        if (number > 0 && number <= numberOfCards) {
            setActiveCardNumber(number)
        }
        if (number > numberOfCards) {
            setActiveCardNumber(number - numberOfCards)
        } 
        if (number < 1) {
            setActiveCardNumber(number + numberOfCards)
        }
    }

    const updateStates = (index, number) => {
        changeActiveCardNumber(number)
        changeActiveIndex(index)
    }

    const cardReel = useRef();
    const cardWrapper = useRef();

    const numberOfCards = props.cards.length

    const cards = props.cards.map((card, index) => {
        return (
            <SlidingCard
                cardID = {card.cardID}
                image = {card.image}
                imageAlt = {card.imageAlt}
                heading = {card.heading}
                shortDesc = {card.shortDesc}
                longDesc = {card.longDesc}
                ctaText = {card.ctaText}
                cardNumber = {index + 1}
                index = {index}
                active = {index === activeIndex ? true :false}
                changeActiveIndex = {changeActiveIndex}
                changeActiveCardNumber = {changeActiveCardNumber}
                key = {`round1-${card.cardID}`}
            />
        )
    })

    const preCards = props.cards.map((card, index) => {
        return (
            <SlidingCard
                cardID = {card.cardID}
                image = {card.image}
                imageAlt = {card.imageAlt}
                heading = {card.heading}
                shortDesc = {card.shortDesc}
                longDesc = {card.longDesc}
                ctaText = {card.ctaText}
                cardNumber = {index + 1}
                index = {(numberOfCards * -1)+ index}
                active = {(numberOfCards * -1)+ index === activeIndex ? true :false}
                changeActiveIndex = {changeActiveIndex}
                changeActiveCardNumber = {changeActiveCardNumber}
                key = {`round2-${card.cardID}`}
            />
        )
    })

    const postCards = props.cards.map((card, index) => {
        return (
            <SlidingCard
                cardID = {card.cardID}
                image = {card.image}
                imageAlt = {card.imageAlt}
                heading = {card.heading}
                shortDesc = {card.shortDesc}
                longDesc = {card.longDesc}
                ctaText = {card.ctaText}
                cardNumber = {index + 1}
                index = {numberOfCards + index}
                active = {(numberOfCards + index) === activeIndex ? true :false}
                changeActiveIndex = {changeActiveIndex}
                changeActiveCardNumber = {changeActiveCardNumber}
                key = {`round3-${card.cardID}`}
            />
        )
    })

    return (
        <section className='slidingCards'>
            <div className='slidingCardsWrapper' ref={cardWrapper}>
                <div className='slidingCardsReel' style={{transform: `translateX(${reelPosition}px)`}} ref={cardReel}>
                    {preCards}
                    {cards}
                    {postCards}
                </div>
                <div className='slidingCardButtons'>
                    <div className='slidingCardsArrowIcon' onClick={() => updateStates(activeIndex - 1, activeCardNumber - 1)}>
                        <FaChevronLeft />
                    </div>
                    <p>{activeCardNumber} / {numberOfCards}</p>
                    <div className='slidingCardsArrowIcon' onClick={() => updateStates(activeIndex + 1, activeCardNumber + 1)}>
                        <FaChevronRight />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SlidingCardContainer;