import React from 'react';
import './styles/App.scss';

import { Route } from 'react-router-dom';
import Nav from './components/layout/navigation/nav';
import Home from './pages/home/home';
import Header from './components/Header/header';
import Category from './pages/category/category';
import SubCategory from './pages/subcategory/subcategory';
import NewSubCategory from './pages/subcategory/new/new';
import Footer from './components/footer/footer';
import productsPage from './pages/product/productsPage';
import NewCategory from './pages/category/new/new';
import NewProduct from './components/forms/NewProduct/newProduct';
import Company from './pages/company/company';
import NewCompany from './components/forms/NewCompany/newCompany';

function App() {
  return (
    <div className="App Dark">
      <div className="main-wrapper">
        <Header />
        <div className="dev-container app-layout m-t-50">
          <div>
            <Nav/>
          </div>
          <div className="dev-main">
            <Route exact path="/" component={Home}/>
            <Route exact path="/company" component={Company}/>
            <Route exact path="/companies/new" component={NewCompany}/>
            <Route exact path="/categories" component={Category}/>
            <Route exact path="/categories/new" component={NewCategory}/>
            <Route exact path="/subcategory" component={SubCategory}/>
            <Route exact path={`/categories/:id/subcategory`} component={NewSubCategory}/>
            <Route exact path="/products" component={productsPage}/>
            <Route exact path="/products/new" component={NewProduct}/>
          </div>
          {/* <div>right content or help</div> */}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
