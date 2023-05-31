import './App.css';

import CardMock from './components/Card/cardMock';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import SectionHeading from './components/Shared/sectionHeading';
import BasicContent from './components/Shared/basicContent';
import ImagePromo from './components/imagePromo';
import imagePromo1 from '../src/assets/pic4.jpg';
import EnhancedFCE from './components/FCE/enhancedFCE';
import image1 from './assets/placeholder1.png';
import listExample1 from './assets/example-1.png';
import FCElement from './components/FCE/FCElement';
import IconizedList from './components/Icon List/iconizedList';

// icons
import {BsPeopleFill, BsClockFill, BsFillCalendarCheckFill, BsBarChartFill} from 'react-icons/bs';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {TbAlertTriangleFilled} from 'react-icons/tb';
import ParallaxList from './components/Parallax List/parallaxList';

function App() {


  return (
        <div id="react-content-container" className="container">   
            <Header />
              <main>
                <SectionHeading heading = "Basic Content Element" id = "bce-1" />
                <BasicContent
                  heading = "Normal BCE"
                  content = {<p>This is the current standard rendering for BCEs. Works fine for medium sized sections with a few lines of text. For renderings with either very minimal content or extensive content, the BCE lakes presence and pop on the page. A simple background rendering like the option for an FCE would help the BCE stand out.</p>}
                  background = {false}
                />
                <BasicContent
                  heading = "BCE with Background Rendering"
                  content = {<p>Example of a BCE with a simple, sloped background rendering. It allows the BCE to pop much more on the page and acts as a frame for extended content to improve readability for lengthier content.</p>}
                  background = {true}
                />
                <SectionHeading heading = "Parallax Image Promo" id = "imgPromo-1" />
                <ImagePromo 
                  heading = "Parallax Image Promo"
                  content = {<><p>All alternative take on the existing image promo component.</p><p>The parallax effect and the fixed text really draws your attention to the promo and adds a modern touch.</p></>}
                  ctaText = "Random CTA"
                  ctaLink = "#"
                  image = {imagePromo1}
                />
                <SectionHeading heading = "Product Cards Landing" id = "pcl-1" />
                <CardMock/>
                <SectionHeading heading = "Enhanced Full Page FCE" id = "efce-1" />
                <EnhancedFCE
                  heading = "An Enhanced FCE"
                  content = {<><p>A full screen take on the traditional FCE.</p><br/>
                    <ul>
                      <li>Background color creates separation from other page elements</li>
                      <li>Minimum height maintains component structure, but image and component height scale with content - to avoid mis-match between image and copy containers</li>
                      <li>Full screen rendering modernizes the component</li>
                      <li>Offers more creative possibilities for longer form copy content</li>
                    </ul></>}
                  image = {image1}
                  imageAlt = "Alternate Image Text"
                  background = {true}
                />
                <SectionHeading heading = "Iconized List" id = "list-1" />
                <FCElement 
                  heading = "Iconized List"
                  imageUrl= {listExample1}
                  imageAlt = "Example of attributes"
                  contentHtml={<><p>This screenshot from the existing Vail summer site is an example of attribute-type information that is presented in a visually unappealing way, using the Product Requirements component. </p><p>The component is not really designed to hold this much text and the oversized font competes with other headings visually on the page, making the information hard to digest.</p><p>This is a great use case for using an iconized list as a way to present important, scannable content in a more appealing and modern way.</p><p>Icons pulled in as image files would allow for a huge amount of customization for different uses.</p></>}
                />
                <IconizedList 
                  items = {[
                    {
                      heading: 'Ages',
                      copy: "7 and Older",
                      icon: <BsPeopleFill/>
                    },
                    {
                      heading: 'Skill Level',
                      copy: "No Experience Required",
                      icon: <BsBarChartFill/>
                    },
                    {
                      heading: 'Requirements',
                      copy: 'Close-toed shoes',
                      icon: <TbAlertTriangleFilled/>
                    },
                    {
                      heading: 'Hours',
                      copy: <>Daily<br/>9AM - 3PM</>,
                      icon: <BsClockFill/>
                    },
                    {
                      heading: 'Dates',
                      copy: 'June 16th - September 4th',
                      icon: <BsFillCalendarCheckFill/>
                    },
                    {
                      heading: 'Location',
                      copy: <>Fancy Lodge <a href='#'>Map It</a></>,
                      icon: <FaMapMarkerAlt/>
                    },
                  ]}
                  heading = 'Basic Attribute List Example'
                  listId = 'iconList1'
                />
                <SectionHeading heading = "Parallax List" id = "list-2" />
                  <ParallaxList 
                    heading = 'Parallax List'
                    listId = 'parallaxList1' 
                    listItems = {[
                        {
                          listText: 'Step 1',
                        },
                        {
                          listText: 'Step 2',
                        },
                        {
                          listText: 'Step 3',
                        },
                        {
                          listText: 'Step 4',
                        },
                        {
                          listText: 'Step 5',
                        },
                      ]}
                    listDetails = {[
                        {
                          html: <div className="pListDetails">
                                  <p>A modern, full screen approach to using a list for storytelling such as to define the steps of a process</p>
                                </div>,
                        },
                        {
                          html: <div className="pListDetails">
                                  <p>This example is a little buggy and does not work on screens below 900px width but it shows the potential.</p>
                                </div>,
                        },
                        {
                          html: <div className="pListDetails">
                                  <img src={image1} alt='Placeholder'/>
                                  <p>You could mix in pictures or other elements</p>
                                </div>,
                        },
                        {
                          html: <div className="pListDetails reverseColor">
                                  <img src={image1} alt='Placeholder'/>
                                  <p>And flip the color scheme</p>
                                </div>,
                        },
                        {
                          html: <div className="pListDetails reverseColor">
                                  <p>There is plenty of room for copy presented in an easy to absorb way.</p><br/><p>For example, what's not to love about a nested list as a summary</p>
                                  <ul>
                                    <li>Takeaway Sushi</li>
                                    <li>Takeaway Burger</li>
                                    <li>Takeaway Tacos</li>
                                  </ul>
                                </div>,
                        },
                      ]}
                  />
                <SectionHeading heading = "Timeline" id = "tline-1" />
                <SectionHeading heading = "Sliding Cards" id = "scards-1" />
              </main>
            <Footer />
        </div>
  );
}

export default App;
