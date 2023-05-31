import React from 'react';
import '../../styles/iconizedList.css';


const IconizedList = ({items, heading, listId}) => {
 
    const itemHtml = items.map((element, index) => {
         
        return (
            <div className='itemContainer' key={`${listId}-${index}`}>
                <div className='icon'>{element.icon}</div>
                <h4>{element.heading}</h4>
                <p>{element.copy}</p>
            </div>
        )
    });

    return (
        <section className="iconizedList" id={listId}>
            <h3>{heading}</h3>
            <div className="AllItemsContainer">
                {itemHtml}
            </div>
        </section>
    )
}

export default IconizedList;