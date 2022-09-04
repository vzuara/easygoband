<template>
  <v-container fluid>
    <v-row class="text-center">
      <v-col cols="12">
        <v-data-table
          id="beersTable"
          :headers="headers"
          :items="beers"
          :options.sync="options"
          :server-items-length="totalBeers"
          :loading="loading"
        >
          <template #[`item.attenuation_level`]="{ item }">
            <v-chip :color="getColor(item.attenuation_level)" dark>
              {{ item.attenuation_level }}
            </v-chip>
          </template>
          <template #[`item.actions`]="{ item }">
            <v-btn
              elevation="0"
              @click="showDetails(item.id)"
              dark
              outlined
              rounded
              small
              color="primary"
            >
              <v-icon dark class="mr-2"> mdi-eye </v-icon> Details
            </v-btn>
          </template>

          <template #[`footer`]>
            <v-chip id="low" class="ma-2" color="green" text-color="white">
              Low Level</v-chip
            >
            <v-chip id="med" class="ma-2" color="orange" text-color="white">
              Medium Level
            </v-chip>
            <v-chip id="high" class="ma-2" color="red" text-color="white">
              High Level</v-chip
            >
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
  name: 'BeerTable',

  data: () => ({
    options: {},
    headers: [
      {
        text: 'Name',
        align: 'start',
        sorteable: false,
        value: 'name',
      },
      {
        text: 'Yeast',
        align: 'start',
        sorteable: false,
        value: 'ingredients.yeast',
      },
      {
        text: 'ABV',
        align: 'start',
        sorteable: false,
        value: 'abv',
      },
      {
        text: 'EBC',
        align: 'start',
        sorteable: false,
        value: 'ebc',
      },
      {
        text: 'IBU',
        align: 'start',
        sorteable: false,
        value: 'ibu',
      },
      {
        text: 'First brewed',
        align: 'start',
        sorteable: false,
        value: 'first_brewed',
      },
      {
        text: 'Attenuation',
        align: 'center',
        sorteable: false,
        value: 'attenuation_level',
      },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
  }),
  mounted() {
    this.setLoading(true);
    this.getBeers();
  },
  methods: {
    ...mapActions(['getBeers']),
    ...mapMutations(['setLoading', 'setPage', 'setPerPage']),
    getColor(attenuationLevel) {
      if (attenuationLevel > 80) return 'red';
      else if (attenuationLevel > 70) return 'orange';
      else return 'green';
    },
    showDetails(id) {
      this.$router.push({ name: 'beerDetails', params: { id } });
    },
  },
  computed: mapState({
    beers: (state) => state.beerModule.beers,
    totalBeers: (state) => state.beerModule.totalBeers,
    loading: (state) => state.loading,
  }),
  watch: {
    beers: {
      handler() {
        this.setLoading(false);
      },
    },
    options: {
      handler({ page, itemsPerPage }) {
        this.setPage(page);
        this.setPerPage(itemsPerPage);
        this.getBeers();
      },
      deep: true,
    },
  },
};
</script>
