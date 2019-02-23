import axios from 'axios';

const apiClient = axios;

export const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic c3ByaW5nLXNlY3VyaXR5LW9hdXRoMi1yZWFkLXdyaXRlLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtd3JpdGUtY2xpZW50LXBhc3N3b3JkMTIzNA==',
  }
};

export default apiClient;
