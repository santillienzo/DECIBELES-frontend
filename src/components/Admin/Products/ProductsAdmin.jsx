import React from 'react';
import './Products.css'
import foto from '../../../components/Header/banner/monitor.png'
import foto2 from '../../../components/Header/banner/BannerEquipodesonido.png'
import { useState } from 'react';
import { getProducts } from '../../../Javascript/apiCore';
import { useEffect } from 'react';
import { API } from '../../../config';

const Products = () => {

    const [productsBanner, setProductsBanner] = useState([]);
    const [productsBestSeller, setProductsBestSeller] = useState([]);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState();

    const loadProducts = () =>{
        getProducts().then(data =>{
            if(data.error){
                setError(data.error)
                console.log(error)
            }else{
                setProducts(data)
            }
        })
    }

    useEffect(()=>{
        loadProducts()
    },[]);


    const sectionAdminProduct = (nameSection, productsArray) =>{
        return(
        <div className="adminProduct_container-section">
            <div className="adminProduct_container-section_title">
                <i class="fas fa-caret-right"></i>
                <h5>{nameSection}</h5>
            </div>
            <div className="adminProduct_productsBox"> 
                <div className="adminProduct_productsBox_product title_adminProduct">
                    <div className="productsBox_product_INPQC">
                        <div className="productsBox_product_I productsBox_product_child">IMAGEN</div>
                        <div className="productsBox_product_N productsBox_product_child">NOMBRE</div>
                        <div className="productsBox_product_P productsBox_product_child">PRECIO</div>
                        <div className="productsBox_product_Q productsBox_product_child">CANTIDAD</div>
                        <div className="productsBox_product_C productsBox_product_child">CATEGORÍA</div>
                    </div>
                </div>
                {
                    productsArray.map((product, i)=>(
                        <div className="adminProduct_productsBox_product" key={i}>
                            <div className="productsBox_product_INPQC">
                                <div className="productsBox_product_I productsBox_product_child"><img src={`${API}/products/photo/${product._id}`} alt="" /></div>
                                <div className="productsBox_product_N productsBox_product_child"><p>{product.name}</p></div>
                                <div className="productsBox_product_P productsBox_product_child">${product.price}</div>
                                <div className="productsBox_product_Q productsBox_product_child">{product.quantity}</div>
                                <div className="productsBox_product_C productsBox_product_child">{product.category.name}</div>
                            </div>
                            <div className="productsBox_product_description"><p></p></div>
                        </div>
                    ))
                }
            </div>
        </div>
        )
    }

    return (
        <section className="adminProduct_container">
            <h3 className="adminProduct_container-title">Panel de control: Productos</h3>
            {sectionAdminProduct("Banner", productsBanner)}
            {sectionAdminProduct("Más vendidos", productsBestSeller)}
            {sectionAdminProduct("Productos", products)}
        </section>
    );
};

export default Products;