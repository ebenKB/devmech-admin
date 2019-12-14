import React from 'react'
import Input from '../../../components/form-fields/input/input';

const FormGroup = ({label, type, value, name, labelTag, handleChange, placeholder }) => {
  return (
    <div className="form-group">
      {
        label && <label htmlFor={label}>{labelTag}</label>
      }
      <Input
        type={type}
        label={label}
        value={value}
        name={name}
        handleChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default FormGroup
