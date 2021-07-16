import React from 'react';
import Title from '../../layout/title/Title';
import './Service.css'

const Service=({name, photo, description})=>{
    return(
        <div className="service-container">
            <div>{photo}</div>
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    )
}

const Services = () => {
    return (
        <section id="servicios">
            <Title title={"Servicios"}/>
            <div className="services-container">
                <Service name="Servicio técnico" photo={<i className='fas fa-tools'></i>} description="Realizamos el mejor servicio técnico de la zona este."/>
                <Service name="Insumos" photo={<i className='far fa-keyboard'></i>} description="Tenemos las mejores herramientas tecnológicas lorem ipsum lorem."/>
                <Service name="Gaming" photo={<i className='fas fa-headset'></i>} description="Gran cantidad de artículos para que compitas en los videojuegos que más te gustan."/>
            </div>
        </section>
    );
};

export default Services;