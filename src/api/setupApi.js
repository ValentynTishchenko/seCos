import axios from 'axios';

const api = axios.create({
  // baseURL: API_BASE_URL, TODO: add baseurl
  headers: {
    'Content-Type': 'application/json',
  },
});

export function onRejected(error) {
  if (error.response.status === 401 && window.location.pathname !== '/login') {
    window.location.assign('/login');
  }

  return Promise.reject({...error, ...{unrecoverable: true}});
}

api.interceptors.response.use(
  response => response,
  onRejected,
);

export default api;
