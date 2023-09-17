import {defineStore} from 'pinia';
import {ref} from 'vue';
import {Token} from 'src/models';

export const useAuthStore = defineStore(
  'auth',
  () => {

    const authToken = ref<Token>({token: null, refresh_token: null});
    const isLoggedIn = (): boolean => {
      return authToken.value.token !== null && authToken.value.refresh_token !== null;
    }
    const setToken = (token: string, refreshToken: string) => {
      authToken.value.token = token;
      authToken.value.refresh_token = refreshToken;
    }
    function reset() {
      authToken.value.token = null;
      authToken.value.refresh_token = null;
    }

    return {token: authToken, setToken, isLoggedIn, reset}
  },
  {
    persist: true
  }
)
