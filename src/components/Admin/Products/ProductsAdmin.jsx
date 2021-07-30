import React from 'react';
import './Products.css'
import './addProductModal.css'
import { useState } from 'react';
import { getCategories, getProducts } from '../../../Javascript/apiCore';
import { useEffect } from 'react';
import { API } from '../../../config';

const Products = () => {

    const [productsBanner, setProductsBanner] = useState([]);
    const [productsBestSeller, setProductsBestSeller] = useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    const [error, setError] = useState();
    const [modalActive, setModalActive] = useState(false)

    const loadProducts = () =>{
        getProducts().then(data =>{
            if(data.error){
                setError(data.error)
                console.log(error)
            }else{
                setProducts(data)
                setProductsBanner(data.filter(product => product.is_banner === true));
                setProductsBestSeller(data.filter(product => product.is_BestSeller === true));
            }
        })
    }

    const loadCategories = () =>{
        getCategories().then(data=>{
            if (data.error) {
                setError(data.error);
            }else{
                setCategories(data);
            }
        })
    }
    
    useEffect(()=>{
        loadProducts();
        loadCategories();
    },[]);
    

    const addProductModal = () =>{
        if (modalActive) {
            return(
                <div className="addProductModal-background">
                    <div className="addProductModal-container">
                        <div className="addProductModal-close" onClick={()=> setModalActive(false)}>
                            <i class="fas fa-times"></i>
                        </div>
                        <div className="addProductModal-contain">
                            <h4>Añadir producto</h4>
                            <form>
                                <div className="addProductModal-contain-formInputs">
                                    <div className="addProductModal-contain-formInputs-section">
                                        <h5>Producto</h5>
                                        <input type="text" placeholder="Nombre"/>
                                        <textarea placeholder="Descripción"></textarea>
                                        <input type="text" placeholder="Precio"/>
                                        <div className="input_width_label">
                                            <label htmlFor="file"><i class="fas fa-image"></i>Imagen</label>
                                            <input type="file" id="file"/>
                                        </div>
                                        <input type="number" placeholder="Cantidad"/>
                                        <select>
                                            <option value="null">Categoría</option>
                                            {
                                                categories.map((category,i)=>(
                                                    <option value={category._id} key={i}>{category.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="addProductModal-contain-formInputs-section">
                                        <h5>Más vendido</h5>
                                        <div className="input_width_label">
                                            <label htmlFor="best_Seller">Más vendido</label>
                                            <input type="checkbox" id="best_Seller"/>
                                        </div>
                                    </div>
                                    <div className="addProductModal-contain-formInputs-section">
                                        <h5>Banner</h5>
                                        <div className="input_width_label">
                                            <label htmlFor="banner">Añadir al Banner</label>
                                            <input type="checkbox" id="banner"/>
                                        </div>
                                        <textarea placeholder="Descripción banner"></textarea>
                                        <div className="input_width_label">
                                            <label htmlFor="color">Color de fondo</label>
                                            <input type="color" id="color" placeholder="Color de fondo"/>
                                        </div>
                                    </div>
                                </div>
                                <button className="addBtn addBtn-formAdd">
                                    <i class="fas fa-check"></i>
                                    <p>Listo</p>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const sectionAdminProduct = (nameSection, productsArray) =>{
        return(
        <div className="adminProduct_container-section">
            <div className="adminProduct_container-section_title">
                <i class="fas fa-caret-right"></i>
                <h5>{nameSection}</h5>
            </div>
            <div className="addBtn addBtn-products" onClick={()=>setModalActive(true)}>
                <i class="far fa-plus-square"></i>
                <p className=".non-selectable">Añadir</p>
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
                            <div className="productsBox_product_description">
                                <p>{product.description}</p>
                            </div>
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
            {addProductModal()}
        </section>
    );
};

export default Products;