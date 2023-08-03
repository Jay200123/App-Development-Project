import About from "./components/About";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact"
import "./styles/styles.css"

// Pages components 
import Page from "./Pages/Page1"

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

      </Routes>
      </BrowserRouter>
      {/* <Main/> */}
    </div>
  );
}

export default App;
