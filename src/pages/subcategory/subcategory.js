import React, {Component} from 'react'
import Axios from '../../utils/axios/axios';
import {Loader} from 'semantic-ui-react';

import SubCategoryItem from '../../components/layout/sub-category-item/sub-category-item';

class subcategory extends Component{
  constructor() {
    super();
    this.state= {
      subcats: null,
      loading: true,
    }
  }

  componentDidMount() {
    Axios.get('/sub_categories')
    .then((res) => {
      this.setState({
        subcats: res.data,
        loading: false,
      })
    });
  }
  render() {
    const {subcats, loading} = this.state;
    return (
      <div>
        <h3>Showing all sub categories</h3>
        {
          loading && <Loader active inline="centered" >loading...</Loader>
        }
        {
          subcats !== null && 
          subcats.map((s) => (
            <SubCategoryItem subcategory={s} key={s.id}/>
          ))
        }
      </div>
    )
  }
}

export default subcategory
