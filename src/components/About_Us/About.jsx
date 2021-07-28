import React from 'react';
import Title from '../../layout/title/Title';
import './About.css'
import edificio from '../../assets/edificio/edificio.png'

const About = ({logo}) => {
    return (
        <section id="nosotros">
            <Title title={"Nosotros"}/>
            <div className="about-container">
                <div className="about-container-info">
                    <h5>¿Quienes somos?</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quisquam laborum fuga! Beatae mollitia quis magni rerum, numquam illum voluptate labore vero ad fuga soluta nulla debitis minima facere quidem.</p>
                    <h5>Misión</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt voluptas iure quo, nam fugiat cupiditate omnis consectetur quisquam similique tempora aspernatur eligendi officiis corrupti rem ea necessitatibus ab dolorem?</p>
                    <img src={logo} alt="" />
                </div>
                <div className="about-container-img">
                    <img src={edificio} alt="" />
                </div>
            </div>
        </section>
    );
};

export default About;