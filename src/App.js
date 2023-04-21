import './App.css';

import CardMock from './components/Card/cardMock';
import Header from './components/Header/index';
import Footer from './components/Footer/index';


function App() {


  return (
        <div id="react-content-container" className="container">   
            <Header />
              <CardMock/>
            <Footer />
        </div>
  );
}

export default App;
