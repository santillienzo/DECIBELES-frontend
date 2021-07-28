import React from 'react';
import { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import './Admin.css'
import Welcome from './Welcome/Welcome';
import ProductsAdmin from './Products/ProductsAdmin';
import Users from './Users/Users';
import Orders from './Orders/Orders';

const Admin = () => {
    const removeDefault = ()=>{
        const routes = document.querySelector('.routes');

        if (routes) {
            routes.style.paddingBottom = "0";
        }
    }
    
    useEffect(()=>{
        removeDefault()
    }, [])

    return (
        <div className="dashboard-container">
            <div className="dashboard-container_menu">
                <ul>
                    <li>
                        <Link to="/admin" className="Link" >
                            <i class="fas fa-door-open non-selectable"></i>
                            <p className="non-selectable">Inicio</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/products" className="Link">
                            <i class="fas fa-desktop"></i>
                            <p  className="non-selectable">Productos</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/users" className="Link" >
                            <i class="fas fa-users"></i>
                            <p  className="non-selectable">Usuarios</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/orders" className="Link" >
                            <i class="fas fa-shopping-bag"></i>
                            <p  className="non-selectable">Pedidos</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="dashboard-container_data">
                <Route path="/admin" exact>
                    <Welcome/>
                </Route>
                <Route path="/admin/products" exact>
                    <ProductsAdmin/>
                </Route>
                <Route path="/admin/users" exact>
                    <Users/>
                </Route>
                <Route path="/admin/orders" exact>
                    <Orders/>
                </Route>
            </div>
        </div>
    );
};

export default Admin;