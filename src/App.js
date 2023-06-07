import './App.css';

import CardMock from './components/Card/cardMock';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import SectionHeading from './components/Shared/sectionHeading';
import BasicContent from './components/Shared/basicContent';
import ImagePromo from './components/imagePromo';
import EnhancedFCE from './components/FCE/enhancedFCE';
import FCElement from './components/FCE/FCElement';
import IconizedList from './components/Icon List/iconizedList';
import ParallaxList from './components/Enhanced Lists/parallaxList';
import IconizedList2 from './components/Icon List/iconizedList2';
import InteractiveList from './components/Enhanced Lists/interactiveList';
import SlidingCardContainer from './components/Sliding Cards/slidingCardContainer';

// images
import imagePromo1 from '../src/assets/pic4.jpg';
import image1 from './assets/placeholder1.png';
import image2 from '../src/assets/pic5.jpg';
import image3 from './assets/placeholder2.webp';
import image4 from '../src/assets/pic3.jpg';
import listExample1 from './assets/example-1.png';

// icons
import {BsPeopleFill, BsClockFill, BsFillCalendarCheckFill, BsBarChartFill} from 'react-icons/bs';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {TbAlertTriangleFilled} from 'react-icons/tb';

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
                <SectionHeading heading = "Sliding Cards" id = "scards-1" />
                <BasicContent
                  heading = "Enhanced Sliding Cards"
                  content = {<><p>The current sliding card component is an effective, responsive and interactive component, however the character limit on the text field limits it's versitility. Here is a built from scratch example of how the component could be tweaked to include an optional, expandable text area.</p><br/><p>Some limitations with this coding example as it is in draft form:</p><ul><li>There are 5 cards but they do not loop indefinitely.</li><li>If the screen width is resized you may need to refresh the page to recenter the carousel.</li></ul></>}
                  background = {true}
                />
                <SlidingCardContainer 
                  cards = {[
                    {
                      cardID: "sCard-1",
                      image: imagePromo1,
                      imageAlt: "Placeholder",
                      heading: "Sliding Card 1",
                      shortDesc: <p>Hello there. This is a sliding card short description.</p>,
                      longDesc: <><p>This is a sliding card long description.</p><br/><p>The existing sliding cards are very limiting in the number of characters allowed, which greatly limits the component's versitility.</p><br/><p>An optional expandable description offers some interesting opportunities.</p></>,
                      ctaText: "Learn More"
                    },
                    {
                      cardID: "sCard-2",
                      image: image1,
                      imageAlt: "Placeholder",
                      heading: "Sliding Card 2",
                      shortDesc: <p>Hello there. This is a sliding card short description but without a long description; so not expandable.</p>,
                      longDesc: null,
                      ctaText: "Learn More"
                    },
                    {
                      cardID: "sCard-3",
                      image: image2,
                      imageAlt: "Placeholder",
                      heading: "Sliding Card 3",
                      shortDesc: <p>Hello there. This is a sliding card without a CTA</p>,
                      longDesc: <p>But there is still a long description.</p>,
                      ctaText: null
                    },
                    {
                      cardID: "sCard-4",
                      image: image3,
                      imageAlt: "Placeholder",
                      heading: "Sliding Card 4",
                      shortDesc: <p>And another one, just for fun and games.</p>,
                      longDesc: <><p>This is a sliding card long description.</p><br/><p>The existing sliding cards are very limiting in the number of characters allowed, which greatly limits the component's versitility.</p><br/><p>An optional expandable description offers some interesting opportunities.</p></>,
                      ctaText: "Learn More"
                    },
                    {
                      cardID: "sCard-5",
                      image: image4,
                      imageAlt: "Placeholder",
                      heading: "Sliding Card 5",
                      shortDesc: <p>Last one. For reals.</p>,
                      longDesc: null,
                      ctaText: "Learn More"
                    },
                  ]}
                />
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
                  heading = 'Simple Attribute List Example'
                  listId = 'iconList1'
                />
                <IconizedList2 
                  items = {[
                    {
                      heading: 'Ages',
                      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      icon: <BsPeopleFill/>
                    },
                    {
                      heading: 'Skill Level',
                      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                      icon: <BsBarChartFill/>
                    },
                    {
                      heading: 'Requirements',
                      copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                      icon: <TbAlertTriangleFilled/>
                    },
                    {
                      heading: 'Hours',
                      copy: <>Lorem ipsum dolor<br/>Lorem ipsum dolor<br/>Lorem ipsum dolor</>,
                      icon: <BsClockFill/>
                    },
                    {
                      heading: 'Dates',
                      copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                      icon: <BsFillCalendarCheckFill/>
                    },
                    {
                      heading: 'Location',
                      copy: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> <a href='#'>Map It</a></>,
                      icon: <FaMapMarkerAlt/>
                    },
                  ]}
                  heading = 'Descriptive Attribute List Example'
                  listId = 'iconList2'
                />
                <SectionHeading heading = "Enhanced Lists" id = "list-2" />
                  <InteractiveList
                    heading = 'Interactive List'
                    listId = 'interactiveList1' 
                    ctaText = 'Optional CTA'
                    listItems = {[
                        {
                          listText: 'Item 1',
                        },
                        {
                          listText: 'Item 2',
                        },
                        {
                          listText: 'Item 3',
                        },
                        {
                          listText: 'Item 4',
                        },
                        {
                          listText: 'Item 5',
                        },
                      ]}
                    listDetails = {[
                        {
                          html: <div className="iListDetails">
                                  <p><strong>A USE ALTERNATIVE TO STACKED FCES</strong></p><p>Especially once we get beyond 2-3 in a row.</p><br/><p>Keeps related content contain visually on the screen and the added interaction (clicking) with out the distraction of scrolling through content increases engagement.</p><br/><br/><p><strong>A USE ALTERNATIVE TO TABS</strong></p><p>Especially when the tab content is in the middle of the page and content continues below. Often the section breaks are hard to visually discern and the page loses it's overall flow and direction.</p><br/><br/><p><strong>AS A NEW COMPONENT OPTION</strong></p>
                                </div>,
                        },
                        {
                          html: <div className="iListDetails">
                                  <div className='iListDetailsImgContainer'>
                                    <img src={image1} alt='Placeholder'/>
                                  </div>
                                  <p>Some content of course is hidden, and requires interaction in order to be visible, so this would only work when the items are related and perhaps not tied to separate CTAs</p>
                                </div>,
                        },
                        {
                          html: <div className="iListDetails">

                                  <p>There is plenty of room for copy presented in an easy to absorb way. Usage examples could be lists of:</p>
                                  <ul>
                                    <li>Features/Benefits</li>
                                    <li>Requirements</li>
                                    <li>Products/Activities</li>
                                    <li>Product Details</li>
                                    <li>Any kind of "small print"</li>
                                    <li>Steps in a Process</li>
                                    <li>Stats or Hours for different LOBs</li>
                                    <li>Etc.</li>
                                  </ul>
                                </div>,
                        },
                        {
                          html: <div className="iListDetails reverseColorWhite">
                                  <div className='iListDetailsImgContainer'>
                                    <img src={image1} alt='Placeholder'/>
                                  </div>
                                  <p>Image and alternate color scheme</p>
                                </div>,
                        },
                        {
                          html: <div className="iListDetails reverseColorWhite">
                                  <p>CTAs could exist on a list item or better, as a single, optional CTA below the list items - when the purpose of the entire list is to drive conversion.</p>
                                </div>,
                        },
                      ]}                  
                  />
                  <ParallaxList 
                    heading = 'Parallax List'
                    listId = 'parallaxList1'
                    ctaText= 'Optional Sticky CTA' 
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
                                  <p>This example is a little buggy and not fully styled. It does not work on screens below 900px width but showcases the potential of a component like this.</p>
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
              </main>
            <Footer />
        </div>
  );
}

export default App;
