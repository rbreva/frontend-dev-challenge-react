import React from 'react';
import photo_01 from "../images/hero/photo-01.jpg";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__backimage"><img src={photo_01} alt="photo-01" /></div>
            <div className="hero__content">
                <h1>Su viaje de <span className="hero__content__resalte">salud emocional</span> empieza aquí</h1>
                <h6>Conoce a nuestros profesionales con licencia</h6>
                <div className="hero__content__reclame">Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.</div>
            </div>
        </div>
    );
}
 
export default Hero;