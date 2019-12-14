import React, {Component } from 'react'
import Axios from '../../utils/axios/axios';
import {Link} from 'react-router-dom';

import {Button, Loader} from 'semantic-ui-react';
import CategoryItem from '../../components/layout/category-item/category-item';

class Category extends Component {
  constructor() {
    super();
    this.state= ({
      loading: true,
      categories: null
    });
  }

 componentDidMount() {
    Axios.get('/categories')
    .then((res) => {
      this.setState({
        categories: res.data,
        loading: false
      });
    });
  }
  
  render() {
    const {loading, categories} = this.state;
    return (
      <div>
        <Link to="categories/new"> 
          <Button primary>Create new </Button>
        </Link>
        <h1>show all the categories here</h1>
        {
          loading && <Loader active inline="centered">Loading</Loader>
        }
        {
          categories !== null &&         
          categories.map(c => (
            <CategoryItem key={c.id}  category={c}/>
          ))
        }
      </div>
    )
  }
}
export default Category
