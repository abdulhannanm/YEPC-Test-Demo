import React from "react"
import Home from "./Home"
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
      <>
        <Routes>
          <Route exact path = "/" element= {<Home />} />
          <Route exact path = "/about" element={<About />} />
          <Route exact path = "/service" element= {<Service />} />
          <Route exact path = "/contact" element= {<Contact />} />
        </Routes>
      </>
    );
};


export default App;