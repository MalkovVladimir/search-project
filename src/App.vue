<template>
  <main>
    <input type="text" />
    <ul>
      <li v-for="item in searchResult">
        <div>{{ item.n }}</div>
        <div>{{ item.dsc }}</div>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import api from "./api";

const searchResult = ref();
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
