import About from "./components/About";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact"
import "./styles/styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route index element={<LandingPage/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="contact" element = {<Contact/>}/>

      </Routes>
      </BrowserRouter>
      {/* <Main/> */}
    </div>
  );
}

export default App;
