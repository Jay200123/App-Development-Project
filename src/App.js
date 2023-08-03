import About from "./components/About";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact"
import "./styles/styles.css"

// Pages components 
import Page from "./Pages/Page1"
import Page2 from "./Pages/Page2"
import Page3 from "./Pages/Page3"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route index element={<LandingPage/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element = {<Contact/>}/>

        {/* Pages Components */}

        <Route path="/page" element = {<Page/>}/>
        <Route path="/page2" element={<Page2/>}/>
        <Route path="/page3" element={<Page3/>}/>

      </Routes>
      </BrowserRouter>
      {/* <Main/> */}
    </div>
  );
}

export default App;
