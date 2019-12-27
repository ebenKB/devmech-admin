import React, {useState} from 'react';
import FormGroup from '../form-group/form-group';
import { Button, TextArea } from 'semantic-ui-react';
import axios from '../../../utils/axios/axios';

const NewCompany = () => {
  const [company, updateCompny] = useState({
    name : '',
    description : '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/companies', company)
      .then((data) => {
        console.log('we are done posting the data', data);
      });
  }

  const handleChange =(e) => {
    const {name, value} = e.target;
    updateCompny((oldState) => ({
      ...oldState,
      [name] : value
    }));
  }

  return (
    <div>
      <h1>Create a new company here</h1>
      <form onSubmit={handleSubmit}>
        <div className="m-t-20">
          <FormGroup
            labelTag="What is the name company?"
            placeholder="Company name"
            label="name"
            name="name"
            value={company.name}
            handleChange={handleChange}
          />
        </div>
        <div className="m-t-20">
          <TextArea
            placeholder="How will you describe the company?"
            name="description"
            value={company.description}
            onChange={handleChange}
          />
        </div>
        <div className="m-t-10 m-t-b-10">
          <Button primary onClick={handleSubmit}>Submit</Button>
        </div>
        <div className="m-t-20 m-b-20">{company.name}</div>
      </form>
    </div>
  );
}

export default NewCompany
