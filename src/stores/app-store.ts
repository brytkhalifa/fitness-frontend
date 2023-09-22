import {defineStore} from 'pinia';
import {ref} from 'vue';
import {useQuasar} from 'quasar';
import {Languages} from 'src/helpers/app-constants';
import {useI18n} from 'vue-i18n';

export const useAppStore = defineStore(
  'app',
  () => {
    const $q = useQuasar();
    const $i18n = useI18n();
    const darkMode = ref<boolean>(false);
    const language = ref<string>('de-DE');

    function setLanguage(strLanguage: string) {
      const isValidLanguage = Languages.includes(strLanguage);
      if (isValidLanguage) {
        language.value = strLanguage;
        $i18n.locale.value = strLanguage;
      }
    }

    function isDarkMode() {
      return darkMode.value === true;
    }

    function toggleDarkMode() {
      darkMode.value = !darkMode.value;
      $q.dark.set(darkMode.value)
    }

    function refreshDarkMode(): void {
      $q.dark.set(darkMode.value)
    }

    function refreshLanguage(): void {
      $i18n.locale.value = language.value;
    }

    return {darkMode, isDarkMode, toggleDarkMode, refreshDarkMode, language, setLanguage, refreshLanguage}
  },
  {
    persist: true
  }
)
