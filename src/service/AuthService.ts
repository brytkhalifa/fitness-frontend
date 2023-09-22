import authClient from 'src/service/AuthClient'
import {UserCredential} from 'src/models';
import {useAuthStore} from 'stores/auth-store';

class AuthService {
  store = useAuthStore();

  login(credential: UserCredential) {
    this.store.reset();
    return authClient.post('/login', {email: credential.email, password: credential.password}).then((res) => {
      this.store.token = res.data;
      return res.data
    });
  }
}

const authService = new AuthService();

export default authService;
