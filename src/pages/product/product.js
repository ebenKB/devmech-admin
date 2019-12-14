import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

const product = () => {
  return (
    <div>
      show all the products here
      <div>
        <Link to="products/new"> 
          <Button primary>Create new </Button>
        </Link>
      </div>
    </div>
  )
}

export default product
