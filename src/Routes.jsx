import './Routes.css';

import logo from './assets/logo/tipografia.png'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import NavBarMenu from './layout/nav/NavBarMenu'
import Header from './components/Header/Header';
import About from './components/About_Us/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';
import BestSeller from './components/Best_sellers/BestSeller';
import Footer from './layout/footer/Footer';
import Product from './components/Product/Product';
import Login from './components/Account/Login/Login';
import Profile from './components/Account/Profile/Profile';
import Admin from './components/Admin/Admin';
import { useEffect } from 'react';


function Routes() {

  return (
    <div className="routes" >
      <Router>
        <NavBarMenu/>
        <Switch>
          <Route path="/" exact>
            <Header/>
            <BestSeller/>
            <Services/>
            <Contact/>
            <Footer/>
          </Route>
          <Route path={"/products/:categoryId"} exact component={Products}></Route>
          <Route path={"/products/view/:productId"} exact component={Product}></Route>
          <Route path="/about" exact>
            <About logo={logo}/>
            <Footer/>
          </Route>
          <Route path="/service" exact>
            <Services/>
            <Footer/>
          </Route>
          <Route path="/contact" exact>
            <Contact/>
            <Footer/>
          </Route>
          <Route path="/account/login" exact>
            <Login/>
            <Footer/>
          </Route>
          <Route path={"/account/profile/:idUser"} exact component={Profile}/>
          <Route path="/admin">
              <Admin/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
