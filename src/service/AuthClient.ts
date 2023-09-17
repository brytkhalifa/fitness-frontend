import axios from 'axios';

import {useAuthStore} from 'src/stores/auth-store';

const authStore = useAuthStore();
const authClient = axios.create(
  {
    baseURL: 'http://localhost:8000/api',
    headers: authStore.isLoggedIn() ? {Authorization: `Bearer ${authStore.token.token}`} : {}
  }
);

export default authClient;
