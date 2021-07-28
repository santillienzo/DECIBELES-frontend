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
                console.log(err)
            }else{
                setProducts(data);
                // console.log(data)
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
                    products.map((product, i)=>( //Renderizamos los productos
                        <Article product={product} key={i}/>
                    ))
                }
                
            </div>
        </section>
    );
};

export default BestSeller;