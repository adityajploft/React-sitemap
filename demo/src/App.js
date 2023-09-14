import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { generateSitemap } from 'react-sitemap-generator'
import Home from "./Pages/Home";
import About from "./Pages/About";
// import Contact from "./Pages/Contact";
import Login from "./Pages/Contact";

function App() {
  return (
    <div className="App">

      <BrowserRouter> 
         <Routes> 
         <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
       
         <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter> 

      {/* <router /> */}
      
    </div>
  );
}

export default App;