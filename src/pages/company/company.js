import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

import './company.scss';

class Company extends Component{
  render() {
    return (
      <div>
        <h1>Show all companies here...</h1>
        <div>
          <Link to="companies/new"> 
            <Button primary>Create new </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Company
