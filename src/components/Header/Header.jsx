import React, {useEffect, useState} from 'react';
import './Header.css'
import { getProducts } from '../../Javascript/apiCore';
import { API } from '../../config';

const Header = () => {
    let [i, setI] = useState(1);
    const [productsBanner, setProductsBanner] = useState([]);
    const [error, setError] = useState();
    

    

    const loadProductsBanner = () =>{
        getProducts().then(data =>{
            if(data.error){
                setError(data.error);
                console.log(error);
            }else{
                const result = data.filter(product => product.is_banner == true)
                setProductsBanner(result);
            }
        })
    }

    


    const bannerSlider = async()=>{
        //Definimos los banners
        const banner2 = document.getElementById("banner-2")
        
        //Definir los indicadores y asignarle valor inicial
        const indicadores = document.querySelectorAll('.indi')
        await indicadores[0].classList.add("indi-sel")
        
        //Definimos los títulos que va a tener y el objeto título
        let title1 = document.getElementById("titleBanner1")
        let title2 = document.getElementById("titleBanner2")
        console.log(productsBanner)
        title1.innerHTML = await productsBanner[0].name;
        
        
        //Definimos el texto que tendra la imagen y el objeto texto
        let texto1 = document.getElementById("textBanner1")
        let texto2 = document.getElementById("textBanner2")
        texto1.innerHTML = productsBanner[0].description_Banner;
        
        //Definimos las imagenes
        var img1 = document.getElementById("imagenBanner1")
        var img2 = document.getElementById("imagenBanner2")
        img1.src = `${API}/products/photo/${productsBanner[0]._id}`; //***************************** */
        
        //Definimos los fondos
        let fondo1 = document.getElementById("fondo1")
        let fondo2 = document.getElementById("fondo2")
        fondo1.style.backgroundColor = productsBanner[0].color;
        
        
        const switchBanner = ()=>{
            img2.src = `${API}/products/photo/${productsBanner[i]._id}`;; //************************** */
            title2.innerHTML = productsBanner[i].name;
            texto2.innerHTML = productsBanner[i].description_Banner;
            fondo2.style.backgroundColor = productsBanner[i].color;
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
        if (productsBanner.length === 0) {
            loadProductsBanner();
        }else{
            bannerSlider();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[productsBanner]);
    
    
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
                productsBanner.map((object,i)=>(
                    <img src={`${API}/products/photo/${object._id}`}  alt=""  key={i} className="indi" />
                ))
            }
            </div>
        </div>
    );
};

export default Header;