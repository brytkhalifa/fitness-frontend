<template>

  <q-layout view="hHr lpr fff">
    <q-header reveal class="bg-white text-dark" height-hint="98">
      <q-toolbar>
        <q-toolbar-title style="font-family: 'Lobster', cursive">
          <q-avatar>
            <q-img src="src/assets/faceless_bodybuilder.png"/>
          </q-avatar>
          Letz Fit
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer"/>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab v-for="tab in HeaderTabs" :to="tab.link" :key="tab.name" :label="tab.name"/>
      </q-tabs>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view/>
      <div class="locale-changer">
        {{ $appStore.language }}
        <select @change="(e) => {$appStore.setLanguage(e.target.value)}">
          <option v-for="(lang, i) in Languages" :key="`Lang${i}`" :value="lang"
                  :selected="lang === $appStore.language">
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
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title style="font-family: 'Lobster', cursive">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Letz Fit</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup lang="ts">
import {useAppStore} from 'stores/app-store';
import {matDarkMode, matLightMode} from '@quasar/extras/material-icons';
import {HeaderTabs, Languages} from 'src/helpers/app-constants';
import {ref} from "vue";

const $appStore = useAppStore();
$appStore.refreshDarkMode();
$appStore.refreshLanguage();

const rightDrawerOpen = ref(false)
const headerTabs = HeaderTabs;

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>
