import React, {useEffect} from 'react';
import { Loader } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { getAllProducts } from '../../redux/products/products.actions';

const Products = ( {productState : {products, loading }, getAllProducts}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getAllProducts();
  },[]);
  
  return (
    <div>
      {
        loading && <div className="m-t-20 m-b-20">
          <Loader active inline='centered'>loading...</Loader>
        </div>
      }
      {
        products != null && products.map((d) => {
          return (
            <div key={d.id} className="m-t-20 m-b-20">
              {d.name} 
              <img src={d.image} alt=""/>
            </div>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  productState: state.productState,
});

const mapDispatchToProps = dispatch => ({
  getAllProducts : () => dispatch(getAllProducts())
});

export default connect (
  mapStateToProps, 
  mapDispatchToProps
)(Products);
