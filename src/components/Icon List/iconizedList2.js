import React from 'react';
import '../../styles/iconizedList.css';


const IconizedList2 = ({items, heading, listId}) => {
 
    const itemHtml = items.map((element, index) => {
         
        return (
            <div className='itemContainer2' key={`${listId}-${index}`}>
                <div className='icon2'>{element.icon}</div>
                <div className='iconCopyContainer'>
                    <h4>{element.heading}</h4>
                    <p>{element.copy}</p>
                </div>
            </div>
        )
    });

    return (
        <section className="iconizedList2" id={listId}>
            <h3>{heading}</h3>
            <div className="AllItemsContainer2">
                {itemHtml}
            </div>
        </section>
    )
}

export default IconizedList2;