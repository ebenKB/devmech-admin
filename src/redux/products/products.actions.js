import productTypes from './products.types';
import axios from '../../utils/axios/axios';
import s3Upload from '../../utils/s3/s3-upload';

// get products from the server
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({
      type : productTypes.SET_LOADING,
    });

    const res = await axios.get('https://mech-api.herokuapp.com/api/v1/products');
   
    // dispatch the action to the reducer
    dispatch({
      type: productTypes.GET_ALL_PRODUCTS,
      payload: res.data,
    });

  } catch(err) {
    dispatch({
      type: productTypes.DONE_LOADING
    })
  }
}

export const addProduct = (product, files) => async(dispatch) => {
  try {
    // upload assets to s3
    const res = await s3Upload(files[0]);
    product.images_attributes.push({url: res.location});
    await axios.post('https://mech-api.herokuapp.com/api/v1/products', product);
    
    // set loading 
    dispatch({
      type: productTypes.SET_LOADING,
    });
  
    // dispatch action to the reducer
    dispatch({
      type: productTypes.ADD_PRODUCT,
      payload: product,
    });
  } catch (error) {
    console.log('an error occured', error);
  }
}

export const setLoading = () => {
  return {
    type : productTypes.SET_LOADING,
    loading : true,
  }
}

export const doneLoading = () => {
  return {
    type : productTypes.DONE_LOADING,
    loading: false,
  }
}