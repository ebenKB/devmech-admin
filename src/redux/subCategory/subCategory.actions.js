import SubTypes from './subCategory.types';
import axios from '../../utils/axios/axios';

export const getSubCategories = () => async(dispatch) => {
  try {
    const res = await axios.get('https://mech-api.herokuapp.com/api/v1/sub_categories');
    console.log('we are done fetching the records', res.data);

    // dispatch the action to the reducer
    dispatch (
      {
        type: SubTypes.GET_SUBCATEGORIES,
        payload: res.data,
      }
    );
  } catch (error) {
    console.log('an error occured while fetching the records');
  }
}

export const getSubCategory = (id) => async(dispatch) => {
  try {
    const res = await axios.get(`https://mech-api.herokuapp.com/api/v1/sub_categories/${id}`);

    // dispatch the action to the reducer
    dispatch (
      {
        type : SubTypes.GET_SUBCATEGORY,
        payload: res.data,
      }
    );
  } catch (error) {
    
  }
}