<template>
  <v-card elevation="0">
    <h2>Description</h2>
    {{ description }}
  </v-card>
</template>

<script>
export default {
  name: 'Description',
  props: {
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
