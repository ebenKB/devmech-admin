import React, { useState, useEffect } from 'react';
import './newProduct.scss';
import FormGroup from '../form-group/form-group';
import { Button } from 'semantic-ui-react';
import FormSelect from '../../form-fields/select/select';
import { addProduct } from '../../../redux/products/products.actions';
import { connect } from 'react-redux';
import { getCategories } from '../../../redux/category/category.actions';
import { getCategorySubcategories} from '../../../redux/category/category.actions';

const NewProduct = ({addProduct, categoryState, subCategoryState, getCategories, getCategorySubcategories}) => {
  const {categories, categorySubCategories, loading} = categoryState;

  useEffect(() => {
    getCategories();
  }, []);

  let isLoading = false;
  const [product, updateProduct] = useState({
    name : '',
    sku : '',
    discount : 0.00,
    price : 0.00,
    company_id : '1',
    product_type_id : 1,
    sub_category_id : null,
    category_id : null,
    images_attributes: [
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
    addProduct(product);
  }

  const didSelectCategory =(e) => {
    const id = e.target.value;
    if(id !== null) {
      updateProduct((oldState) => ({
        ...oldState,
       category_id: id,
      }));

      // get the sub categories that are related to this category
      getCategorySubcategories(id);
    } else {
      // clear the selection
      updateProduct((oldState) => ({
        ...oldState,
       category_id: null,
      }));
    }
  }

  const didSelectSubCategory = (e) => {
    const id = e.target.value;
    if(id !=null) {
      updateProduct((oldState) => ({
        ...oldState,
        sub_category_id: id,
      }));
    }
  }

  const handleFiles = () => {
    const files = document.getElementById('file').files;
    console.log('we want to handle files', files)
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
        <div className="m-t-20 m-b-20">
          <input type="file" id="file" onChange={handleFiles} multiple/>
        </div>
        <div className="m-t-20">
          <span className="m-r-20">Select a category</span>
          <FormSelect
            options={categories}
            handleChange={didSelectCategory}
          />
          {
            (categorySubCategories != null && categorySubCategories.length > 0) && 
            <FormSelect
              options={categorySubCategories}
              handleChange={didSelectSubCategory}
            />
          }
        </div>
        <div className="m-t-10 m-t-b-10">
          <Button primary className={isLoading ? 'ui loading button' : ''}>Submit</Button>
        </div>
        <div className="m-t-20 m-b-20">{product.name}</div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => (
  {
    addProduct : (product) => dispatch(addProduct(product)),
    getCategories : () => dispatch(getCategories()),
    getCategorySubcategories : (id) => dispatch(getCategorySubcategories(id)),
  }
);

const mapStateToProps = (state) => (
  {
    categoryState : state.categoryState,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
