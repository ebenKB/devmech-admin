import productTypes from './products.types';

const INITIAL_STATE = {
  products : [],
  loading : false,
  error : null,
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case productTypes.GET_ALL_PRODUCTS :
      return {
        ...state,
        products : action.payload,
        loading : false,
      }
    
    case productTypes.SET_LOADING :
      return {
        ...state,
        loading : true,
      }
    
    case productTypes.DONE_LOADING :
      return {
        ...state,
        loading: false,
      }
    
    case productTypes.ADD_PRODUCT :
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false
      }
    
    default :
      return state;
  }
}

export default productReducer;
