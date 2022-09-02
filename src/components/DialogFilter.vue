<template>
  <v-dialog v-model="dialog" max-width="600" persistent>
    <FilterForm />
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
import FilterForm from './FilterForm';

export default {
  name: 'DialogFilter',
  components: {
    FilterForm,
  },
  computed: {
    ...mapState({
      dialog: (state) => state.dialog,
    }),
  },
};
</script>
