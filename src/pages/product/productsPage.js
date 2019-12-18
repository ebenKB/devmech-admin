import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import ProductComponent from '../../components/products/products';

const product = () => {
  return (
    <div>
      <div className="ui label full-width">
        <h3>Products</h3>
      </div>
      <div>
        <Link to="products/new"> 
          <Button primary>Create new</Button>
        </Link>
        <ProductComponent />
      </div>
    </div>
  );
}

export default product;
