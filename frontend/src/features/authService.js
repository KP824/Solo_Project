// npm i axios 
import axios from 'axios';

const API_URL = '/api/users/register'

// Register user
const register = async (userData) => {
  //console.log(`inside of register authService. `)

  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data;
};

// Create logout function
const logout = () => {
  localStorage.removeItem('user');
}

const authService = {
  register,
  logout
};

export default authService;