import {React, useMemo} from 'react';
import '../../styles/parallaxList.css';
import useObserver from '../../hooks/useObserver';


const ParallaxList = ({heading, listItems, listDetails, listId}) => {  

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
           document.getElementById(id).classList.remove('active');
       }
    }

    const liOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    }

    const buildRefArray = (element) => {
        const observer = new IntersectionObserver(addObserver, liOptions)
        observer.observe(element);
    }

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
        <section className="parallaxList">
            <div id="pListItems">
                <h2 id="pListHeading" ref={containerRef}>
                    <span className={isVisible ? 'active' : ''}>{heading}</span>
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
    )
}

export default ParallaxList;