<template>
  <v-card elevation="0">
    <h5>TWIST</h5>
    {{ data }}
  </v-card>
</template>

<script>
export default {
  name: 'Twist',
  props: {
    data: {
      type: String,
      require: true,
    },
  },
};
</script>
