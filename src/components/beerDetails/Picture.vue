<template>
  <v-hover v-slot:default="{ hover }">
    <v-card :elevation="hover ? 10 : 5">
      <v-img id="picture" :src="img" height="300" contain />
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'Picture',
  props: {
    img: {
      type: String,
      required: true,
    },
  },
};
</script>
