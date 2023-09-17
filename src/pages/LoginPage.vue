<template>
  <!-- <div class="row justify-center" style="height: 250px">
    <div class="col-6 self-center">
      <h3 style="color: pink">Letz Fit</h3>
    </div>
  </div>-->
  <div class="row justify-center items-center">
    <div class="col-10 col-md-8 q-mt-xl ">
      <!-- full form-->
      <div class="row items-center">
        <!-- LEFT SIDE -->
        <div class="col-12 col-md-6">
          <div class="row text-center items-center justify-center ">
            <div class="col-4">
              <q-toolbar-title class=" text-pink text-h3 " style="font-family: 'Lobster', cursive">
                Letz Fit
              </q-toolbar-title>
            </div>
            <div class="col-12">
              <div class="row justify-center">
                <div class="col-7">
                  <q-img
                    fit="fill"
                    placeholder-src="https://img.freepik.com/free-photo/big-dumbbells-white_144627-24203.jpg?size=626&ext=jpg"
                    src="https://img.freepik.com/free-photo/big-dumbbells-white_144627-24203.jpg?size=626&ext=jpg"
                    spinner-color="red">
                  </q-img>
                </div>
              </div>
              <!--  -->
            </div>
          </div>
        </div>
        <!-- RIGHT SIDE -->
        <div class="col-12 col-md-5 col-lg-5">
          <q-form
            @submit="login"
            class="q-gutter-md"
          >
            <q-input
              color="purple-9"
              v-model="username"
              :label="$t('email')"
            />
            <q-input
              :type="visible ? 'text' : 'password'"
              color="indigo"
              v-model="password"
              :label="$t('password')"
              :clearable="true"
            />
            <q-toggle
              :label="$t('password_visibility')"
              v-model="visible"
            />
            <q-btn

              type="submit" color="indigo" :label="$t('login')" :loading="loading"/>
          </q-form>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import {ref} from 'vue';
import {UserCredential} from 'src/models';
import {useRouter} from 'vue-router';
import authService from 'src/service/AuthService';
import {useAppStore} from 'stores/app-store';

const username = ref('');
const password = ref('');
const visible = ref(false);
const loading = ref(false);
const router = useRouter();
useAppStore();
function login() {
  loading.value = true;
  //TODO https://www.thedutchlab.com/insights/using-axios-interceptors-for-refreshing-your-api-token
  const user: UserCredential = {email: username.value, password: password.value}
  authService.login(user)
    .then(res => {
        console.log(res)
        router.push('/home')
      }
    )
    .catch((e) => {
      console.log(e.response)
      console.log(e.config);
    })
    .finally(() => {
      loading.value = false;
    })
}

</script>
<style lang="scss">

/*.as{
  border-style: dotted;
  border-width: 1px;
  border-color: blue;
}*/

</style>
