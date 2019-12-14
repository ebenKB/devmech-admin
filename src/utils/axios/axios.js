import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://mech-api.herokuapp.com/api/v1',
})

// get the token from the auth

export default axios;
