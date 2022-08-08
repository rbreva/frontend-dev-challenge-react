import React from 'react';
import quotes from "../images/svg/icons/quotes.svg";

const Testimonials = () => {
    return (
        <div className="container testimonials">
            <div className="testimonials__item">
                <div className="testimonials__item--img"><img src={quotes} /></div>
                <div className="testimonials__item--quote">Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.</div>
                <div className="testimonials__item--name">~ Maria Montessori ~</div>
            </div>
        </div>
    );
}
 
export default Testimonials;