import React from 'react'
import {Input} from 'semantic-ui-react';

const file = ({ value, name, handleChange, placeholder}) => {
  return (
    <div className="user-input">
      <Input
        type="file"
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default file
