import React from 'react';
import Home from './pages/Home';
import Header from './Component/header/Header';
import Section from './Component/header/Section';
import Footer from './Component/footer/Footer';

const App = () => {
    return ( <div>
    <Header/>
    <Section/>
    <Home/>
    <Footer/>
    </div>
     );
}
 
export default App;