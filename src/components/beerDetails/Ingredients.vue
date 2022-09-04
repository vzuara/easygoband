<template>
  <v-card name="ingredients" elevation="0">
    <h2>Ingredients</h2>
    <div v-for="(group, type) in ingredients" :key="type" class="mt-3">
      <h5>{{ type.toUpperCase() }}</h5>
      <div v-if="typeof group === 'object'">
        <p v-for="(ingredient, index) in group" :key="index" class="mb-0">
          <v-icon color="red" small class="mr-2">mdi-heart</v-icon>
          {{ ingredient.name }} {{ getAmount(ingredient.amount) }}
        </p>
      </div>
      <div v-if="typeof group === 'string'">{{ group }}</div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Ingredients',
  props: {
    ingredients: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getAmount(data) {
      if (!data) return '';
      return `${data.value} ${data.unit}`;
    },
  },
};
</script>
