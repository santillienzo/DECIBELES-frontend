import React from 'react';
import Title from '../../layout/title/Title';
import './Contact.css'
import Map from './Map';
import './SocialMedia.css'
import logo from '../../assets/logo/logocompleto.png'

const SocialMedia = ()=>{
    return(
        <ul className="socialMedia-container">
            <li><a href="https://www.facebook.com/dbdecibelessolucionesinformaticas" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.instagram.com/decibelesinformatica/" target="_blank"><i class="fab fa-instagram"></i></a></li>
            <li><a href="mailto:decibelesinsumos@gmail.com" target="_blank"><i class="far fa-envelope"></i></a></li>
            <li><a href="https://wa.me/542634356086" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
        </ul>
    )
}

const Contact = () => {
    return (
        <section id="contacto">
            <Title title={"Contacto"}/>
            <div className="contact-container">
                <div className="map-container">
                    <Map/>
                </div>
                <div className="info-contact-container">
                    <div className="info-contact-container-social">
                        <SocialMedia/>
                    </div>
                    <div className="other-info-container">
                        <div className="other-info">
                            <i class="fas fa-map-marker-alt"></i>
                            <p>25 de Mayo y Arjonilla | San Martín | Mendoza</p>
                        </div>
                        <div className="other-info">
                            <i class="fas fa-phone"></i>
                            <p>+54 0263 435-6086</p>
                        </div>
                    </div>
                    <div className="contact-logo-container">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;