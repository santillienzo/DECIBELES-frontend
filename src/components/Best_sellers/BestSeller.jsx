import React, { useEffect, useState } from 'react';
import Title from '../../layout/title/Title';
import './BestSeller.css'
import Article from '../Products/Article/Article';
import { getProducts } from '../../Javascript/apiCore';

const BestSeller = () => {
    const [productsBestSeller, setProductsBestSeller] = useState([]);
    const [err, setError] = useState(false);
    
    const loadProducts = () =>{
        getProducts().then(data=>{
            if (data.error) {
                setError(data.error);
                console.log(err)
            }else{
                const result = data.filter(product => product.is_BestSeller == true)
                setProductsBestSeller(result);
            }
        })
    }

    useEffect(()=>{
        loadProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section>
            <Title title={"Más vendidos"}/>
            <div className="bestSeller-container">
                {
                    productsBestSeller.map((product, i)=>( //Renderizamos los productos
                        <Article product={product} key={i}/>
                    ))
                }
                
            </div>
        </section>
    );
};

export default BestSeller;