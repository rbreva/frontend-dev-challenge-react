import React from 'react';
import suscript from "../images/svg/icons/suscript.svg";

const Suscript = () => {
    return (
        <div className="suscript">
            <div className="suscript__background"></div>
            <div className="suscript__content">
                <div className="suscript__img"><img src={suscript} /></div>
                <div className="suscript__form">
                    <div className="suscript__form__title">Title</div>
                    <div className="suscript__form__text">Text</div>
                    <form className="suscript__form__form">
                        <input type="email" placeholder="Inserte su correo" />
                        <button className="suscript__form__form--btn" type="submit">Suscribirse</button>
                    </form>
                </div>
            </div>    
        </div>
    );
}
 
export default Suscript;