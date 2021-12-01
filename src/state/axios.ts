import axios from 'axios';

export default axios.create({
  baseURL: `https://accelerist.herokuapp.com`,
  headers: {
      'content-type': 'application/json'
  }
});