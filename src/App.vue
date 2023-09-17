<template>
  <div class="locale-changer">
    {{ $appStore.language }}
    <select @change="(e) => {$appStore.setLanguage(e.target.value)}">
      <option v-for="(lang, i) in Languages" :key="`Lang${i}`" :value="lang" :selected="lang === $appStore.language">
        {{ lang }}
      </option>
    </select>
    <q-btn
      :fab-mini="true"
      :push="true"
      @click="$appStore.toggleDarkMode()"
      :icon="$appStore.isDarkMode() ? matLightMode :matDarkMode"
    />
  </div>
  <router-view/>
</template>

<script setup lang="ts">
import {useAppStore} from 'stores/app-store';
import {matDarkMode, matLightMode} from '@quasar/extras/material-icons';
import {Languages} from 'src/helpers/app-constants';

const $appStore = useAppStore();
$appStore.refreshDarkMode();
$appStore.refreshLanguage();
</script>
