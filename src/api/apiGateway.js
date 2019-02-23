import apiClient from './apiClient';
import { API_BASE_URL } from '../constants/baseUrl';


export const signIn = (login, password) => apiClient.post(`${API_BASE_URL}/account/api/user/login`,
  {
    login,
    password
  });

export const signUp = data => apiClient.post(`${API_BASE_URL}/registration/api/registration`,
  data
);

const apiGateway = {
  signIn,
  signUp,
};

export default apiGateway;
