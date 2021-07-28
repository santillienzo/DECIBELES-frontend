import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../config';
import { getProductById } from '../../Javascript/apiCore';
import Contact from '../Contact/Contact';
import './Product.css'

const Product = (props) => {

    const [product, setProduct] = useState();
    const [error, setError] = useState()

    const loadProduct = (productId) =>{
        getProductById(productId).then(data=>{
            if (data.error) {
                setError(data.error)
                console.log(error)
            }else{
                setProduct(data)
                console.log(product)
            }
        })
    }

    useEffect(()=>{
        const productId = props.match.params.productId;
        console.log(productId)
        loadProduct(productId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props])


    const modalTemporal = (e)=>{
        e.preventDefault()
        alert("Página todavía no diseñada :)")
    }

    if (product) {
        return (
            <>
                <section className="product_section">
                    <div className="backLinks-container">
                        <Link to="/">Inicio</Link>
                        <i class="fas fa-chevron-right"></i>
                        <Link to={`/products/${product.category._id}`}>{product.category.name}</Link>
                        <i class="fas fa-chevron-right"></i>
                        <span>{product.name}</span>
                    </div>
                    <div className="product-info-container">
                        <div className="product-info-img">
                            <img src={`${API}/products/photo/${product._id}`} alt="" />
                            <div className="product-info-description">
                                <h5>Especificaciones técnicas</h5>
                                <div className="product-info-description_item">
                                    <h6>Descripción</h6>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="product-info-data">
                            <h4>{product.name}</h4>
                            <p className="price">${product.price}</p>
                            <form action="" onSubmit={modalTemporal}>
                                <input type="number" placeholder="0"/>
                                <button  class="btn-submit-article">AGREGAR AL CARRITO</button>
                            </form>
                        </div>
                    </div>
                </section>
                <Contact/>
            </>
    
        )
    }else{
        return(<span></span>)
    }
};

export default Product;