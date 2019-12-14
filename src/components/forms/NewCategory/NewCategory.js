import React, {useState} from 'react'
import Axios from '../../../utils/axios/axios';
import FormGroup from '../../../components/forms/form-group/form-group';
import {Button} from 'semantic-ui-react';

const  CreateCategory = () => {
  const [category, updateCategory] = useState({
    name: '',
    description: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    updateCategory({
      ...category,
      [name]: value,
    })
  }

  const createCategory = (e) => {
    e.preventDefault();
    Axios.post('/categories',category)
    .then((data) => {
      console.log('WE ARE DONE POSTING...', data);
    })
  }
  return (
    <div>
      <h1>Create new category</h1>
      <div>
        <form onSubmit={createCategory}>
          <div className="m-t-20">
            <FormGroup
              labelTag="What is the category?"
              placeholder="Category name"
              label="name"
              name="name"
              value={category.name}
              handleChange={handleChange}
            />
          </div>
          <div className="m-t-20">
            <FormGroup
              labelTag="How will you describe this category?"
              placeholder="Category description"
              label="description"
              name="description"
              value={category.description}
              handleChange={handleChange}
            />
          </div>
          <div className="m-t-10 m-t-b-10">
            <Button primary>Submit</Button>
          </div>
          <div className="m-t-20 m-b-20">{category.name}</div>
          <div className="m-t-20 m-b-20">{category.description}</div>
        </form>
      </div>
    </div>
  )
}

export default CreateCategory;
