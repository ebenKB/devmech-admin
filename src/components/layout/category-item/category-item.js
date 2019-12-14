import React from 'react'
import {Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const CategoryItem = ({category}) => {
  return (
    <div>
      {category.name}
     <div className="m-b-10 m-b-10 text-right">
        <Link to={`/categories/${category.id}/subcategory`}>
          <Button primary>Add subcategory</Button>
        </Link>
     </div>
    </div>
  )
}

export default CategoryItem
