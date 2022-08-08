import React from 'react';
import card from "../images/cards/card.jpg";

const Cards = () => {
    return ( 
        <div className="container cards">
            <div className="cards__card">
                <img src={card} />
                <div className="cards__card--category">Nutrición</div>
                <div className="cards__card--title">Colapso mental: cuando siento el peso del mundo sobre mí</div>
                <div className="cards__card--description">A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…</div>
            </div>
            <div className="cards__card">
                <img src={card} />
                <div className="cards__card--category">Nutrición</div>
                <div className="cards__card--title">Colapso mental: cuando siento el peso del mundo sobre mí</div>
                <div className="cards__card--description">A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…</div>
            </div>
            <div className="cards__card">
                <img src={card} />
                <div className="cards__card--category">Nutrición</div>
                <div className="cards__card--title">Colapso mental: cuando siento el peso del mundo sobre mí</div>
                <div className="cards__card--description">A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…</div>
            </div>
        </div>
     );
}
 
export default Cards;