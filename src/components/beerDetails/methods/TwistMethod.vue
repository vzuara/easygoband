<template>
  <v-card name="twist" elevation="0">
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
      required: true,
    },
  },
};
</script>
