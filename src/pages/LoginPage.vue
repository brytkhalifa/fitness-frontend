<template>
  <!-- <div class="row justify-center" style="height: 250px">
    <div class="col-6 self-center">
      <h3 style="color: pink">Letz Fit</h3>
    </div>
  </div>-->

 <div class="column"  style="height: 150px">
    <div class="row self-center" ><h3 style="color:pink;">Letz Fit</h3></div>

    <div class="col self-center" style="width: 300px">

      <div class="q-pa-md" style="padding-top: 150px">
        <div class="q-gutter-md" style="max-width: 300px">
          <div class="row">
            <p style="border-radius: 50%; width: 100px; height: 100px; background:pink"></p>
          <p style="float: left; width: 150px; height: 150px; margin: 20px; shape-outside: circle(50% at 30%); clip-path: circle(50% at 0%); background: lightblue;"></p>
          </div>

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
          <q-btn style="background: #ff0080; color: white" label="Login" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const benutzername = ref('');
const passwort = ref('');
const visible = ref(false);
</script>
<style lang="scss">
p {
  background-color: #000000;
}

</style>
