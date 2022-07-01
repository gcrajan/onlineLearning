import React from 'react';
import Home from "../Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
    return ( 
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </div>
     );
}
 
export default App;