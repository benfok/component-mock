import React from "react";
import Card from "./card";
import BasicContent from "../Shared/basicContent";
import '../../styles/card.css';
import '../../styles/contentElement.css';
import image1 from '../../assets/placeholder1.png';


const CardMock = () => {
    return (
        <>
            <BasicContent 
                heading = "Product Card Component"
                content = {<><p>Below are three takes on an enhanced product card component. The existing component holds limited text and requires a CTA. It is therefore only useful as a promotional component linking elsewhere. There are many situations where the PCL component could be standalone and hold all the necessary information, or trigger a modal or direct add-to-cart to reduce clicks to purchase. Activity products could be considered in this way for example.</p>
                <ul>
                    <li>As a minimal change, the CTA requirement should be changed to optional. </li>
                    <li><strong>First</strong> example below follows existing but includes a simple expandable text area where a short description can be expanded to show more information.</li>
                    <li>The <strong>Second</strong> includes additional attributes to showcase how hours or location could be included for a business or activity. The Book Now CTA could link to a product page, or pop a purchase modal. The icons could be configurable, offering two customizable "tabs" essentially that could be used for things like hours, location, amenities (lodging property), contact info, benefits (think SRS search and book page), pricing or any other attribute category.</li>
                    <li><strong>Third</strong> example is like the second but without a CTA, with the card used solely for information.</li>
                </ul></>}
                background= {true}
            />
            <section className="sectionCard">
                <Card 
                    cardID= "002"                    
                    image = {image1}
                    imageAlt = "test"
                    heading = "Snow Tubing"
                    shortDesc = "Enjoy the thrill of sliding down a slope while wedged inside an inner tube."
                    longDesc = "Yes, believe it or not it is rather exciting. You might get a wet and sometimes even bruised bottom, but it's as close as you can get to skiing, without actually skiing. It's like a water park, just with ice. And more clothing."
                    ctaText="Book Now"
                />
                <Card 
                    cardID= "001"
                    image = {image1}
                    imageAlt = "test"
                    heading = "Enhanced Product Card"
                    shortDesc = "Expanded description with the addition of key business information and a CTA."
                    longDesc = "Self contained card that can include key information, and either link to a purchase page or better, trigger a purchase modal. Could be useful for Activity products, for a dining page with a 3rd party reservation CTA or for displaying more information about lodging properties before linking to an Inntopia page if the hours tab was changed to amenities for example."
                    ctaText="Book Now"
                    hours = {
                        <div>
                            <h4>Hours of Operation</h4>
                            <table className="cardTable">
                                <tbody>
                                    <tr>
                                        <td>Monday</td>
                                        <td>10:00am - 3:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td>10:00am - 3:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td>10:00am - 3:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td>10:00am - 3:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td>10:00am - 3:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>9:00am - 4:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td>9:00am - 4:00pm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    }
                    location = {
                        <div>
                            <h4>Location</h4>
                            <p>1234 Snow Street</p>
                            <p>Vail, CO 88165</p>
                            <div>
                                <a href="#" className="linkCTA">View on Google Maps</a>
                            </div>
                            <br/>
                        </div>
                    }
                />
                <Card 
                    cardID= "003"
                    image = {image1}
                    imageAlt = "test"
                    heading = "Product Card sans CTA"
                    shortDesc = "Expanded take on the existing component, without the CTA requirement."
                    longDesc = "At times, the CTA requirement is restricting."
                    hours = {
                        <div>
                            <h4>Hours of Operation</h4>
                            <table className="cardTable">
                                <tbody>
                                    <tr>
                                        <td>Monday</td>
                                        <td>10:00am - 3:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td>10:00am - 3:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td>10:00am - 3:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td>10:00am - 3:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td>10:00am - 3:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>9:00am - 4:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td>9:00am - 4:00pm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    }
                    location = {
                        <div>
                            <h4>Location</h4>
                            <p>1234 Snow Street</p>
                            <p>Vail, CO 88165</p>
                            <div>
                                <a href="#" className="linkCTA">View on Google Maps</a>
                            </div>
                            <br/>
                        </div>
                    }
                />
            </section>
        </>
    )
}

export default CardMock;