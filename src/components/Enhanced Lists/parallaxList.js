import {React, useEffect, useMemo} from 'react';
import '../../styles/enhancedList.css';
import useObserver from '../../hooks/useObserver';
import { IconContext } from 'react-icons/lib';
import { TbArrowAutofitWidth } from 'react-icons/tb';
import useMedia from '../../hooks/useMedia';


const ParallaxList = ({heading, listItems, listDetails, listId, ctaText}) => {  

    // determine if screen size is less than 1080px and render accordingly
    const isMobile = useMedia('(max-width: 700px)');

    // call in the custom useObserver hook to create the wipe in animation on the heading
    const [containerRef, isVisible] = useObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    })

    const addObserver = (entries) => {
        const [entry] = entries;
        const previousItem = entry.target.previousElementSibling
            // `entry.isIntersecting` will be true if the element is visible
            if(entry.isIntersecting) {
            // If we are passing a callback function, we would call it here
            // if(options.callback) {
            //     options.callback(element)
            // } else {

            // once the element comes into view, take the apprropiate details component and render it to the screen
            const id = entry.target.dataset.details;
            document.getElementById(id).classList.add('active');

            // if there is a previous list item, if that item has a border, remove the border
            if (previousItem) {
                    previousItem.children[0].classList.remove('active');
            }

            // This would be if we want to remove the observer, but in order for the animations to function in reverse scroll it needs to remain for this component
                // observer.unobserve(entry.target)
       } else {
            const id = entry.target.dataset.details;

            // if it is off screen, make sure the previous element has a border - to handle reverse scrolling.
            if (previousItem) {
                if (!previousItem.children[0].classList.value.includes('active')){
                    previousItem.children[0].classList.add('active');
            }
           }
           if (document.getElementById(id)) {
               document.getElementById(id).classList.remove('active');
           }
        //    document.getElementById(id).classList.remove('active');
       }
    }

    const liOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    }

    const refArray = [];

    // create an array of the TbRefresh. Then use useEffect to manage the observer on these after the component renders and unrenders
    const buildRefArray = (element) => {
        refArray.push(element);
    }

    useEffect(() => {
        
        const observer = new IntersectionObserver(addObserver, liOptions)
        refArray.forEach(element => {
            observer.observe(element);
        });
      
    })

    // useMemo ensures that the list items and details only render(map) once to the DOM to save resource. 
    const liItems = useMemo(() => {
        
        const html = listItems.map((element, index) => {
            return (
                <li ref={(element) => buildRefArray(element)} className='pListTrigger' id={`list1-${index}`} data-index={index} data-details={`details-${index}`} key={`${listId}-${index}`}>
                    <div className="pListBorder active"></div>
                    {element.listText}
                </li>
            )
        });

        return html

    }, [listItems]);

    const liDetails = useMemo(() => {
    
    
        const html = listDetails.map((element, index) => {
         
            return (
                <div className='pListDetailsContainer' id={`details-${index}`} key={`${listId}-details-${index}`}>
                    {element.html}
                </div>
            )
        });

        return html

    }, [listDetails]); 


    return (
        <>
        {isMobile &&
            <div className="mobilePlaceholder">
                <IconContext.Provider value={{ className: "mobileMainIcon"}}>
                    <TbArrowAutofitWidth />
                </IconContext.Provider>
                <p>The <strong>Parallax List component</strong> is currently only configured for screen widths 700 pixels or wider.</p><br/>
                <p>For a mobile version, please contact:<br/><a href="mailto:ben@tidylines.co">ben@tidylines.co</a></p>
            </div>
        }
        {!isMobile &&      
            <section className="parallaxList">
                <div id="pListItems">
                    <h2 id="pListHeading" ref={containerRef}>
                        <span className={isVisible ? 'active' : ''}>{heading}</span>
                        {ctaText &&
                            <div className="pListCTA">
                                <a className="btn primaryCTA" href="#">{ctaText}</a>
                            </div>
                        }
                    </h2>
                    <ol className="pListContainer">
                        {liItems}
                        <div className="pListBuffer"></div>
                    </ol>    
                </div>
                <div id="pListDetails">
                    {liDetails}
                </div>
            </section>
        }
        </>
    )
}

export default ParallaxList;