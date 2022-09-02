<template>
  <v-card elevation="0">
    <p class="my-5">
      <span class="font-weight-bold mr-2">Tagline:</span>
      <span class="text--secondary font-italic">{{ tagline }}</span>
    </p>
  </v-card>
</template>

<script>
export default {
  name: 'Tagline',
  props: {
    tagline: {
      type: String,
      require: true,
    },
  },
};
</script>
