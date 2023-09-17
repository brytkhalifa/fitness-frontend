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
          <div class="as row text-center items-center justify-center ">
            <div class="as col-4">
              <q-toolbar-title class="bg-white text-pink text-h3 " style="font-family: 'Lobster', cursive">
                Letz Fit
              </q-toolbar-title>
            </div>
            <div class="as col-12">
              <div class="row justify-center">
                <div class="col-7">
                  <q-img
                    fit="fill"
                    placeholder-src="https://img.freepik.com/free-photo/big-dumbbells-white_144627-24203.jpg?size=626&ext=jpg"
                    src="https://img.freepik.com/free-photo/big-dumbbells-white_144627-24203.jpg?size=626&ext=jpg"
                    spinner-color="white">
                  </q-img>
                </div>
              </div>
              <!--  -->
            </div>
          </div>
        </div>
        <!-- RIGHT SIDE -->
        <div class="as col-12 col-md-3 col-lg-3">
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input
              color="purple-9"
              v-model="benutzername"
              label="Benutzername"
            />
            <q-input
              :type="visible ? 'text' : 'password'"
              color="purple-9"
              v-model="passwort"
              label="Passwort"
            />
            <q-toggle
              label="See password"
              v-model="visible"
            />
            <q-btn @click.stop.prevent="click" type="submit" style="background: #ff0080; color: white" label="Login"/>
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from 'vue';
import axios from "axios";


const benutzername = ref('');
const passwort = ref('');
const visible = ref(false);

onMounted(async () => {
  const res = await axios.get('http://localhost:8000/api/test');
})
</script>
<style lang="scss">
p {
  background-color: #000000;
}

/*.as{
  border-style: dotted;
  border-width: 1px;
  border-color: blue;
}*/

</style>
