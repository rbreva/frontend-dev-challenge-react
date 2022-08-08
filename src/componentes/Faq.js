import React from 'react';
import down from "../images/svg/icons/down.svg";

const Faq = () => {
    return ( 
        <div className="container faq">
            <div className="faq__title">FAQ</div>
            <div className="faq__testimonials">
                <div className="faq__testimonials_items">
                    <div className="faq__testimonials_items__testimonial">
                        <div className="faq__testimonials_items__testimonial--title">¿Cuáles son los pasos para tomar una decisión?</div>
                        <div className="faq__testimonials_items__testimonial--down"><img src={down} /></div>
                    </div>

                    <div className="faq__testimonials_items__testimonial">
                        <div className="faq__testimonials_items__testimonial--title">¿Cuáles son los pasos para tomar una decisión?</div>
                        <div className="faq__testimonials_items__testimonial--down"><img src={down} /></div>
                    </div>

                    <div className="faq__testimonials_items__testimonial">
                        <div className="faq__testimonials_items__testimonial--title">¿Cuáles son los pasos para tomar una decisión?</div>
                        <div className="faq__testimonials_items__testimonial--down"><img src={down} /></div>
                    </div>
                </div>
                <div className="faq__excerpt">
                    <div>¿Cómo podemos diseñar una educación que tenga como resultado niños más responsables? En este artículo compartimos algunas estrategias que aumentan la probabilidad de éxito para este objetivo.</div>
                </div>
            </div>
        </div>
    );
}
 
export default Faq;