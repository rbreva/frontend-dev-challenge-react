import React from 'react';
import mcontigo_white from "../images/svg/icons/mcontigo_white.svg";
import separator from "../images/svg/icons/separator.svg";

const Footer = () => {
    return (
        <footer>
            <div className="container contFooter">
                    <div className="contFooter__logo-mcontigo">
                        <img src={mcontigo_white} alt="mcontigo" />
                    </div>
                    <div className="contFooter__copyright">
                        <p>La Mente es Maravillosa is a property of Grupo MContigo</p>
                        <p>© 2012 - 2020. All rights reserved.</p>
                        <p>Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.</p>
                    </div>
            </div>
            
            <div className="container separador">
                <img src={separator} alt="separador" />
            </div>

            <div className="container about">
                <ul className="about__list">
                    <li><a href="#">Política de Cookies</a></li>
                    <li><a href="#">Política de Privacidad</a></li>
                    <li><a href="#">Términos y condiciones de uso</a></li>
                    <li><a href="#">Cláusula Informativa de Consentimiento</a></li>
                </ul>
            </div>
        </footer>
    );
}
 
export default Footer;