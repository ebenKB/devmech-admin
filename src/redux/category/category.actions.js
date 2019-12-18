import CategoryTypes from './category.types';
import axios from '../../utils/axios/axios';

export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get('https://mech-api.herokuapp.com/api/v1/categories');

    // dispatch the action to the reducer
    dispatch({
      type : CategoryTypes.GET__CATEGORIES,
      payload : res.data,
    })
  } catch (error) {
    console.log('an error occured while fetching the posts')
  }
}

// fetch all the sub categories that are related to a category
export const getCategorySubcategories = (cat_id ) => async(dispatch) => {
  try {
    // set loading 
    // dispatch({
    //   type: CategoryTypes.SET_LOADING,
    // });

    const res = await axios.get(`https://mech-api.herokuapp.com/api/v1/categories/${cat_id}/sub_categories`);
    
    dispatch({
      type : CategoryTypes.GET_CATEGORY_SUBCATEGORIES,
      payload: res.data,
    });
  } catch (error) {
    console.log('an error occured...')
  }
}

export const doneLoading = () => {
  return {
    type : CategoryTypes.DONE_LOADING,
    loading: false,
  }
}