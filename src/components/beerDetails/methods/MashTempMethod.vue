<template>
  <v-card elevation="0">
    <h5>MASH TEMP</h5>
    <p v-for="(process, index) in data" :key="index" class="mb-0">
      {{ `Temp: ${process.temp.value}` }}
      <v-icon class="pb-1">mdi-temperature-celsius</v-icon>
      {{ ` Duration: ${process.duration}` }}
    </p>
  </v-card>
</template>

<script>
export default {
  name: 'MashTemp',
  props: {
    data: {
      type: Array,
      require: true,
    },
  },
};
</script>
