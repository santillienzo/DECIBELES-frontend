import React, {useEffect, useState} from 'react';
import imagenes from './imagenes';
import './Header.css'

const Header = () => {
    let [i, setI] = useState(1);
    let bannerObjects= [
        {
            name:"NOGA STORMER",
            description: "Poderoso Gabinete Gamer con 3 Coolers con LEDS rojos.Contiene 1 Puerto USB 3.0, 2 Puertos USB 2.0 y conexiones miniplug para Auriculares y Mic. <br/>Posee 2 paneles de vidrio tonalizados. <br/>Incluye Fuente de Alimentación de 600W.",
            photo: imagenes.bannerPcGamer,
            color: "#a61414b9"
        },
        {
            name:"PANTALLA SAMSUNG",
            description: "Los TV QLED de Samsung están compuestos de materiales inorgánicos que brindan una imagen coherente, brillante y vívida durante años.",
            photo: imagenes.bannerMonitor,
            color: "#a0a2a165"
        },
        {
            name:"EQUIPO DE SONIDO",
            description: "Lleva tus fiestas a otro nivel con este potente sistema de sonido compacto. Siente el ritmo de tus pistas favoritas con tweeters de alta eficiencia y JET BASS BOOSTER.",
            photo: imagenes.bannerSonido,
            color: "#29aae24f"
        },
    ]

    const bannerSlider = ()=>{
        //Definimos los banners
        const banner2 = document.getElementById("banner-2")

        //Definir los indicadores y asignarle valor inicial
        const indicadores = document.querySelectorAll('.indi')
        indicadores[0].classList.add("indi-sel")
        
        //Definimos los títulos que va a tener y el objeto título
        let title1 = document.getElementById("titleBanner1")
        let title2 = document.getElementById("titleBanner2")
        title1.innerHTML = bannerObjects[0].name;
        
        //Definimos el texto que tendra la imagen y el objeto texto
        let texto1 = document.getElementById("textBanner1")
        let texto2 = document.getElementById("textBanner2")
        texto1.innerHTML = bannerObjects[0].description;
        
        //Definimos las imagenes
        var img1 = document.getElementById("imagenBanner1")
        var img2 = document.getElementById("imagenBanner2")
        img1.src = bannerObjects[0].photo;

        //Definimos los fondos
        let fondo1 = document.getElementById("fondo1")
        let fondo2 = document.getElementById("fondo2")
        fondo1.style.backgroundColor = bannerObjects[0].color;


        const switchBanner = ()=>{
            img2.src = bannerObjects[i].photo;
            title2.innerHTML = bannerObjects[i].name;
            texto2.innerHTML = bannerObjects[i].description;
            fondo2.style.backgroundColor = bannerObjects[i].color;
            //Definimos el indicador actual y manipulamos las clases
            const indicadorActual = indicadores[i]
            Array.from(indicadores).forEach(cir => cir.classList.remove("indi-sel"))
            indicadorActual.classList.add("indi-sel")

            //
            banner2.classList.add("active")
            setI(i++)
            if (i === indicadores.length) {
                i = 0
            }

            setTimeout(()=>{
                img1.src = img2.src
                title1.innerHTML = title2.textContent
                texto1.innerHTML = texto2.textContent
                fondo1.style.backgroundColor = fondo2.style.backgroundColor
                banner2.classList.remove("active")
            },1000)
        }
        
        window.setInterval(switchBanner,5000);
    }

    useEffect(()=>{
        bannerSlider();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    
    return (
        <div className="prod_principal-container" id="inicio">
            <div className="banner" id="banner-1">
                <div className="text_prod_prin-container">
                    <div>
                        <h3 id="titleBanner1">.</h3>
                        <p id="textBanner1">.
                        </p>
                    </div>
                </div>
                <div className="img_prod_prin-container">
                    <div id="fondo1">
                        <img id="imagenBanner1" src="" alt=""/>
                    </div>
                </div>
            </div>
            <div className="banner" id="banner-2">
                <div className="text_prod_prin-container">
                    <div>
                        <h3 id="titleBanner2">.</h3>
                        <p id="textBanner2">
                        </p>
                    </div>
                </div>
                <div className="img_prod_prin-container">
                    <div id="fondo2">
                        <img id="imagenBanner2" src="" alt=""/>
                    </div>
                </div>
            </div>
            <div className="indicadores">
            {
                bannerObjects.map((object,i)=>(
                    <img src={object.photo}  alt=""  key={i} className="indi" />
                ))
            }
            </div>
        </div>
    );
};

export default Header;