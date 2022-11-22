import axios from 'axios';

const search = async () =>
  axios.get(`http://localhost:3002/api/products`);

export default { search };
