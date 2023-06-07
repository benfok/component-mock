import {React, useState} from 'react';
import '../../styles/enhancedList.css';
import useObserver from '../../hooks/useObserver';
import { IconContext } from 'react-icons/lib';
import { TbArrowAutofitWidth } from 'react-icons/tb';
import useMedia from '../../hooks/useMedia';


const InteractiveList = ({heading, listItems, listDetails, listId, ctaText}) => {  

    // determine if screen size is less than 1080px and render accordingly
    const isMobile = useMedia('(max-width: 700px)');

    // call in the custom useObserver hook to create the wipe in animation on the heading
    const [containerRef, isVisible] = useObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    })

    const [activeListIndex, setActiveListIndex] = useState(0)

    function updateListIndex (index, event) {
        setActiveListIndex(index);
    }

    const liItems = listItems.map((element, index) => {
            return (
                <li onClick={(event) => updateListIndex(index, event)} className={index === activeListIndex ? 'iListTrigger active': 'iListTrigger'} id={`list2-${index}`} data-index={index} data-details={`iListdetails-${index}`} key={`${listId}-${index}`}>
                    <div className={index === activeListIndex ? 'iListBorder active': 'iListBorder'}></div>
                    <span>{element.listText}</span>
                </li>
            )
    });

    const liDetails = listDetails.map((element, index) => {
         
            return (
                <div className={index === activeListIndex ? 'iListDetailsContainer active': 'iListDetailsContainer'}  id={`iListdetails-${index}`} key={`${listId}-details-${index}`}>
                    {element.html}
                </div>
            )
    });


    return (
        <>
            {isMobile &&
                <div className="mobilePlaceholder">
                    <IconContext.Provider value={{ className: "mobileMainIcon"}}>
                        <TbArrowAutofitWidth />
                    </IconContext.Provider>
                    <p>The <strong>Interactive List component</strong> is currently only configured for screen widths 700 pixels or wider.</p><br/>
                    <p>For a mobile version, please contact:<br/><a href="mailto:ben@tidylines.co">ben@tidylines.co</a></p>
                </div>
            }
            {!isMobile &&  
                <section className="interactiveList">
                    <div id="iListItems">
                        <h2 id="iListHeading" ref={containerRef}>
                            <span className={isVisible ? 'active' : ''}>{heading}</span>
                        </h2>
                        <ol className="iListContainer">
                            {liItems}
                        </ol>
                        {ctaText &&
                            <div className="iListCTA">
                                <a className="btn primaryCTA" href="#">{ctaText}</a>
                            </div>
                        }
                    </div>
                    <div id="iListDetails">
                        {liDetails}
                    </div>
                </section>
            }
        </>
    )
}

export default InteractiveList;