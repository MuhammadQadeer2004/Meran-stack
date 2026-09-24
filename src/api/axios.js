import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:5001/api', // Replace with your backend API URL
});
export default api;