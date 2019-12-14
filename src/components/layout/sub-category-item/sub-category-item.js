import React from 'react'

const SubCategoryItem = ({subcategory}) => {
  const {name} = subcategory;
  return (
    <div>
      {name}
    </div>
  )
}

export default SubCategoryItem
