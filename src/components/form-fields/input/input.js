import React from 'react';
import {Input} from 'semantic-ui-react';

import './input.scss';

const UserInput = ({type, value, name, handleChange, placeholder}) => {

  return (
    <div className="user-input">
      <Input
        type={type} 
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default UserInput;