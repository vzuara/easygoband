<template>
  <v-app-bar app color="white" elevation="0">
    <div class="d-flex align-center">
      <v-img
        alt="EasyGoBand logo"
        class="shrink mr-2 hidden-md-and-up"
        contain
        src="./../assets/logo.png"
        transition="scale-transition"
        width="100"
      />

      <v-img
        alt="EasyGoBand logo"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="200"
        src="./../assets/logo.png"
        width="200"
      />
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TopBar',
};
</script>
