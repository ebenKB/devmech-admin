import React from 'react';
import { TextArea } from 'semantic-ui-react'
import './textarea.scss';

const textarea = ({placeholder, name, value}) => {
  return (
    <TextArea 
      placeholder={placeholder} 
      spellcheck={true}
      name={name}
      value={value}
    />
  )
}

export default textarea
