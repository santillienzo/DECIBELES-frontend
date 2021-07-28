import React, { useEffect, useState } from 'react';
import { getCategories, getCategoryById, getProducts } from '../../Javascript/apiCore';
import Article from './Article/Article';
import './Product.css'
import {Link} from 'react-router-dom';
import Footer from '../../layout/footer/Footer';

const Products = (props) => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])

    const [category, setCategory] = useState({
        id: "all",
        name: "Todo"
    });

    const [error, setError] = useState(false);

    //Cargar Products
    const loadProducts = () =>{
        getProducts().then(data=>{
            if (data.error) {
                setError(data.error);
                console.log(error)
            }else{
                setProducts(data);
            }
        })
    }

    //Cargar Categories
    const loadCategories = () =>{
        getCategories().then(data=>{
            if (data.error) {
                setError(data.error);
            }else{
                setCategories(data);
                // console.log(data)
            }
        })
    }

    const handleCategory = (categoryId) =>{
        if (categoryId === "all") {
            setCategory({
                id: "all",
                name: "Todo"
            });
        }else{
            getCategoryById(categoryId).then(data=>{
                if(data.error){
                    setError(data.error);
                }else{
                    setCategory({
                        id: data._id,
                        name: data.name
                    });
                }
            })
        }
    }

    const returnProduct =(category, product, i)=>{
        if (category === product.category._id) {
            return(
                <Article key={i} product={product}/>
            )
        }else if(category === "all" ){
            return(
                <Article key={i} product={product}/>
            )
        }
    }

    useEffect(()=>{
        const categoryId = props.match.params.categoryId;
        loadProducts();
        loadCategories();
        handleCategory(categoryId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props])

    return (
        <>
        <div className="products-container">
            <div className="products_category-container">
                <div className="product-spaceBox"></div>
                <ul className="product-box-category">
                    <li value="all"><Link to="/products/all" className="Link">Todo</Link></li>
                    {
                        categories.map((category, i)=>( //Renderizamos las categorías
                            <li><Link to={`/products/${category._id}`} className="Link">{category.name}</Link></li>
                        ))
                    }
                </ul>
            </div>
            <div className="products_product-container">
                <div className="product-spaceBox">
                    <h4>{category.name}</h4>
                </div>
                <div className="product-box">
                    {
                        products.map((product, i)=>( //Renderizamos los productos
                            returnProduct(category.id, product, i)
                        ))
                    }
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Products;