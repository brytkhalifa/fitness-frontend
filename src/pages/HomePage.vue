<template>
  <h1>
    Welcome!
    Successful logged in!
  </h1>
</template>
<script setup lang="ts">
import {onMounted} from 'vue';
import authClient from 'src/service/AuthClient';

function sayHi() {
  authClient.get('/user').then((res) => console.log(res.data));
}

onMounted(() => {
  sayHi();
})
</script>
<style scoped>

</style>
