import React from 'react';
import './Welcome.css'
import phoneSVG from '../../../assets/SVG/user.svg'
import databaseSVG from '../../../assets/SVG/database.svg'
import mobileSVG from '../../../assets/SVG/mobile.svg'
import shopSVG from '../../../assets/SVG/shop.svg'

const Welcome = () => {
    return (
        <section className="admin-welcome-container">
            <div className="admin-welcome-container_title">
                <h4>Bienvenido al panel de control</h4>
                <p>Aquí podrás interactuar con la base de datos de tu tienda. Podrás ver, añadir, eliminar y editar tus productos; también podrás observar los usuarios registrados, controlar los pedidos de tus clientes, entre otras cosas!. En el lado izquierdo está la barra de navegación, haz click en una de sus pestañas.</p>
            </div>
            <div className="admin-welcome-container_svg">
                <img src={databaseSVG} alt="" id="databaseSVG"/>
                <img src={shopSVG} alt="" id="shopSVG"/>
            </div>
        </section>
    );
};

export default Welcome;