import './css/App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom"

import Header from "./component/Header"
import Footer from "./component/Footer"

import Home from "./component/Home"
import Contact from "./component/Contact"
import Lenis from "./component/case-study/Lenis"
import Crypto from "./component/case-study/CryptoCoin"
import JobFind from "./component/case-study/JobFind"
import Millers from "./component/case-study/Millers"
import Gallery from "./component/gallery/Gallery"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main-content">
             <Header/>
           {/* <PhoneMenu/> */}
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/case-study/lenis" element={<Lenis/>}/>
                <Route exact path="/case-study/cryptocoin" element={<Crypto/>}/>
                <Route exact path="/case-study/jobfinds" element={<JobFind/>}/>
                <Route exact path="/case-study/millers" element={<Millers/>}/>
                <Route exact path="/case-study/illustration" element={<Gallery/>}/>
              </Routes>
        </div>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
