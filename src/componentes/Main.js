import React from 'react';
import Hero from './Hero';
import Cards from './Cards';
import separator from "../images/svg/icons/separator.svg";
import Faq from './Faq';
import Testimonials from './Testimonials';
import Suscript from './Suscript';

const Main = () => {
    return (
        <div className="main">
            <Hero />
            <Cards />
            <div className="container separador"><img src={separator} alt="separador" /></div>
            <Faq />
            <Testimonials />
            <Suscript />
        </div>    
    );
}
 
export default Main;