import apiClient, { config } from './apiClient';
import { API_BASE_URL, client_id } from '../constants/api';

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

export const fetchAllergiesByBarcode = ({barcode, token}) => {
  barcode = 9002490100070;
  return apiClient.get(
    `${API_BASE_URL}/user/alergenitems/${barcode}`,
    {
      ...config,
      headers: {'Authorization': 'Bearer ' + token}
    }
  );
};

const apiGateway = {
  signIn,
  fetchAllergiesByBarcode,
};

export default apiGateway;
