<template>
  <v-card name="fermentation" elevation="0">
    <h5>FERMENTATION</h5>
    {{ data.temp.value }} <v-icon class="pb-1">mdi-temperature-celsius</v-icon>
  </v-card>
</template>

<script>
export default {
  name: 'Fermentation',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
