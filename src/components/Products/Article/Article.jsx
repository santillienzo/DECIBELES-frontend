import React from 'react';
import { API } from '../../../config';
import './Article.css'

const Article = ({product}) => {
    return (
        <div className="producto non-selectable">
            <div className="card wow animate__animated animate__fadeIn" >
                <img src={`${API}/products/photo/${product._id}`} className="card-img-top img-carta" alt="..." />
                <div className="card-body">
                    <h5 className="card-title titulo-carta">{product.name}</h5>
                    <p className="card-text texto-carta">{product.description}</p>
                    <div className="price-container">
                        <p className="pricing_card ">$ {product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;