import React, { useState, useEffect } from 'react';
import './newProduct.scss';
import FormGroup from '../form-group/form-group';
import axios from '../../../utils/axios/axios';
import { Button } from 'semantic-ui-react';
import FormSelect from '../../form-fields/select/select';
import {Link} from 'react-router-dom';

const NewProduct = (props) => {
const options = [
  {
    name: 'hello',
    id: 11,
  },
  {
    name: 'thanks',
    id: 1
  }
]

useEffect(() => {
  axios.get('/categories')
  .then((res) => {
    const {data} = res;
    console.log('This is the data', data);
  });
});

  let isLoading = false;
  const [product, updateProduct] = useState({
    name : '',
    sku : '',
    discount : 0.00,
    price : 12.99,
    company_id : '1',
    product_type_id : 1,
    sub_category_id : '1',
    category_id : '1',
    images: [
      {
        url: 'https://media.debenhams.com/i/debenhams/23_10_19_womens_dresses_epsp_adspot_5?w=776&h=776&qlt=70&fmt=jpeg&v=1',
      },
      {
        url: 'https://www.rosewe.com/images/201905/goods_img/222314_G_15587932644630.jpg',
      },
    ]
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    updateProduct((oldState) => ({
      ...oldState,
      [name] : value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    isLoading = true;
    axios.post('/products', product)
      .then((data) => {
        console.log('We are done posting to the backend', data);
        isLoading = false;
        props.history.push('/products');
      });
  }

  const handleSelect =(e) => {
    const id = e.target.value;
    if(id !== null) {
      updateProduct((oldState) => ({
        ...oldState,
       category_id: id,
      }));
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="m-t-20">
          <FormGroup
            labelTag="What is the name product?"
            placeholder="Product name"
            label="name"
            name="name"
            value={product.name}
            handleChange={handleChange}
          />
        </div>
        <div className="m-t-20">
          <FormGroup
            labelTag="What is the SKU for the product?"
            placeholder="SKU"
            label="sku"
            name="sku"
            value={product.sku}
            handleChange={handleChange}
          />
        </div>
        <div className="m-t-20">
          <FormGroup
            labelTag="What is the cost of the product?"
            placeholder="Cost of product"
            label="cost"
            name="price"
            type="number"
            value={product.price}
            handleChange={handleChange}
          />
        </div>
        <div className="m-t-20">
          <span className="m-r-20">Select a category</span>
          <FormSelect
            options={options}
            handleChange={handleSelect}
          />
        </div>
        <div className="m-t-10 m-t-b-10">
          <Button primary className={isLoading ? 'ui loading button' : ''}>Submit</Button>
        </div>
        <div className="m-t-20 m-b-20">{product.name}</div>
      </form>
    </div>
  );
}

export default NewProduct
