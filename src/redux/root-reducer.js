import {combineReducers} from 'redux';
import productReducer from '../redux/products/products.reducer';
import categoryReducer from '../redux/category/category.reducer';
import subCategoryReducer from '../redux/subCategory/subCategory.reducer';

export default combineReducers({
  productState : productReducer,
  categoryState : categoryReducer,
  subCategoryState : subCategoryReducer,
});
