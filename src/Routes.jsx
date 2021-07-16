import './Routes.css';
import NavBarMenu from './layout/nav/NavBarMenu'
import Header from './components/Header/Header';
import About from './components/About_Us/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';
import BestSeller from './components/Best_sellers/BestSeller';


import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { useState } from 'react';


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
            <About/>
            <Contact/>
          </Route>
          <Route path={"/products/:categoryId"} component={Products} />
          <Route path="/about" exact>
            <About/>
          </Route>
          <Route path="/service" exact>
            <Services/>
          </Route>
          <Route path="/contact" exact>
            <Contact/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
