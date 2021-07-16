import React, { useEffect, useState } from 'react';
import Title from '../../layout/title/Title';
import './BestSeller.css'
import Article from '../Products/Article/Article';
import { getProducts } from '../../Javascript/apiCore';

const BestSeller = () => {
    const [products, setProducts] = useState([]);
    const [err, setError] = useState(false);
    
    const loadProducts = () =>{
        getProducts().then(data=>{
            if (data.error) {
                setError(data.error);
            }else{
                setProducts(data);
                // console.log(data)
            }
        })
    }

    useEffect(()=>{
        loadProducts();
    }, []);

    return (
        <section>
            <Title title={"Más vendidos"}/>
            <div className="bestSeller-container">
                {
                    products.map((product, i)=>( //Renderizamos los productos
                        <Article product={product}/>
                    ))
                }
                
            </div>
        </section>
    );
};

export default BestSeller;