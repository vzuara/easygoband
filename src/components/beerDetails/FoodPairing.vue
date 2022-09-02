<template>
  <v-card elevation="0">
    <h2>Food Pairing</h2>
    <p v-for="(food, index) in foods" :key="index" class="mb-0">
      <v-icon color="red" small class="mr-2">mdi-heart</v-icon>{{ food }}
    </p>
  </v-card>
</template>

<script>
export default {
  name: 'FoodPairing',
  props: {
    foods: {
      type: Array,
      require: true,
    },
  },
};
</script>
