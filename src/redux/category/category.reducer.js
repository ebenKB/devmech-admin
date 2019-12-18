import CategoryTypes from './category.types';

const INITIAL_STATE = {
  categories : [],
  categorySubCategories: null, // these are the sub categories that are related to a category
  laoding: false,
  error: null,
}
const CategoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CategoryTypes.GET__CATEGORIES : 
    return {
      ...state,
      categories: action.payload,
      loading :false,
    }

   case CategoryTypes.GET_CATEGORY_SUBCATEGORIES : 
    return {
      ...state,
      categorySubCategories : action.payload,
      loading: false,
    }

    case CategoryTypes.SET_LOADING :
      return {
        ...state,
        loading: true,
      }
    
      case CategoryTypes.DONE_LOADING :
        return {
          ...state,
          loading: false,
        }
    default :
      return state;
  }
}

export default CategoryReducer;

