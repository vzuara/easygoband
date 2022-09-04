<template>
  <v-card name="contributedBy" elevation="0">
    <p class="my-0 font-italic font-weight-bold">By: {{ person }}</p>
  </v-card>
</template>

<script>
export default {
  name: 'ContributedBy',
  props: {
    person: {
      type: String,
      required: true,
    },
  },
};
</script>
