<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="increment">
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
    <home-page></home-page>
  </div>
</template>

<script setup lang="ts">
import {useCounterStore} from 'src/stores/example-store';
import { Todo, Meta } from 'src/models';
import { computed, ref } from 'vue';
import HomePage from 'src/pages/HomePage.vue';
const store = useCounterStore();
interface Props {
  title: string;
  todos?: Todo[];
  meta: Meta;
  active: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  todos: () => [],
});

const clickCount = ref(0);
function increment() {

  clickCount.value += 1;
  store.increment();

  return clickCount.value;
}

const todoCount = computed(() => props.todos.length);

</script>
