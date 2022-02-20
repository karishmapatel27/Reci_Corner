import axios from 'axios';

export default axios.create({
    // baseURL: 'http://localhost:3500'
    baseURL: 'localhost:8080/api/v1',
    headers: {
      'Content-type': 'application/json'
    }
});