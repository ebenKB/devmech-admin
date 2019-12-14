import React, {useState} from 'react';
import Axios from '../../../utils/axios/axios';
import Input from '../../../components/form-fields/input/input';
import FormGroup from '../../../components/forms/form-group/form-group';

const CreateSubCategory = (props) => {
  const [subcat, updateSubCat] =useState({
    name: '',
    category_id: props.match.params.id,
  })
  const {name} = subcat;
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    updateSubCat((oldState) => (
      {
        ...oldState,
        [name]: value,
      }
    ))
  }

  const saveSubCategory = async(e) => {
    e.preventDefault();
    // check if the sub category has a name
    if(name !== null && name !== '') {
      const res = Axios.post('sub_categories', subcat);
      console.log('This is the res from Axios', res);
    }
  }
  return (
    <div>
      <form onSubmit={saveSubCategory}>
        <h3>New Subcategory</h3>
        <FormGroup
          type="text"
          value={name}
          name="name"
          handleChange={handleChange}
          placeholder="How would you call the subcategory?"
        />
        <div className="m-t-10 m-b-10">
          <Input
            type="submit"
          />
        </div>
      </form>
    </div>
  )
}

export default CreateSubCategory
