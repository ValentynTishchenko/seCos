import apiClient, { config } from './apiClient';
import { API_BASE_URL,client_id } from '../constants/api';

const createSignInFormData = (password, username) => {
  const formData = new FormData();
  formData.set('password', password);
  formData.set('username', username);
  formData.set('client_id', client_id);
  formData.set('grant_type', 'password');
  return formData;
};
export const signIn = (username = 'romanchi', password = 'frdfhtkm12') => apiClient.post(
  `${API_BASE_URL}/oauth/token`,
  createSignInFormData(password, username),
  config
);

const apiGateway = {
  signIn,
};

export default apiGateway;
