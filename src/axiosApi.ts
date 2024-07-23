import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://homework71-59d62-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default axiosApi;
