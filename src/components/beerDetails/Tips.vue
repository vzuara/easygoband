<template>
  <v-card name="tips" elevation="0">
    <p class="my-0 text--subtitle-2 font-italic">* {{ tips }}</p>
  </v-card>
</template>

<script>
export default {
  name: 'Tips',
  props: {
    tips: {
      type: String,
      required: true,
    },
  },
};
</script>
