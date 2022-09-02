<template>
  <v-app>
    <TopBar />

    <v-main class="mt-5" style="background-color: rgb(235 222 211 / 44%)">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar.vue';
export default {
  name: 'App',
  components: { TopBar },
  data: () => ({}),
};
</script>
