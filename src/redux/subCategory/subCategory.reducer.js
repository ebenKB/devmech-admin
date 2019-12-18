import SubCategoryTypes from './subCategory.types';

const INITIAL_STATE = {
  subCategories: [],
  currentSubCategory: null,
  loading: false,
  error : null,
}

const subCategory = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SubCategoryTypes.GET_SUBCATEGORIES :
      return {
        ...state,
        subCategories : [state.subCategories, action.payload],
      }

      case SubCategoryTypes.GET_SUBCATEGORY : 
        return {
          ...state,
          currentSubCategory : action.payload,
          loading : false,
        }
    default : 
      return state;
  }
}

export default subCategory;
