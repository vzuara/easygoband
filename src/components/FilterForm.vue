<template>
  <v-card>
    <v-card-title class="text-h5"> Search beers by... </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="filters.name" clearable label="Name" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="filters.yeast" clearable label="Yeast" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="filters.hops" clearable label="Hops" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <Calendar
              :max="filters.brewed_before"
              :label="'Brewed after'"
              v-model="filters.brewed_after"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <Calendar
              :min="filters.brewed_after"
              :label="'Brewed before'"
              v-model="filters.brewed_before"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="filters.food" clearable label="Food" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="filters.malt" clearable label="Malt" />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              type="number"
              :max="filters.abv_max"
              v-model="filters.abv_min"
              clearable
              label="ABV Min value"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              type="number"
              :min="filters.abv_min"
              v-model="filters.abv_max"
              clearable
              label="ABV Max value"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              type="number"
              :max="filters.ibu_max"
              v-model="filters.ibu_min"
              clearable
              label="IBU Min value"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              type="number"
              :min="filters.ibu_min"
              v-model="filters.ibu_max"
              clearable
              label="IBU Max value"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              type="number"
              :max="filters.ebc_max"
              v-model="filters.ebc_min"
              clearable
              label="EBC Min value"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              type="number"
              :min="filters.ebc_min"
              v-model="filters.ebc_max"
              clearable
              label="EBC Max value"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="green darken-1" outlined small rounded @click="search">
        Search
      </v-btn>

      <v-btn
        color="red darken-1"
        outlined
        small
        rounded
        @click="setDialog(false)"
      >
        Cancel
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import Calendar from './Calendar.vue';

export default {
  name: 'FilterForm',
  components: {
    Calendar,
  },
  methods: {
    ...mapActions(['getBeers']),
    ...mapMutations(['setDialog', 'setLoading']),
    search() {
      this.setLoading(true);
      this.getBeers();
      this.setDialog(false);
    },
  },
  computed: mapState({
    filters: (state) => state.beerModule.filters,
  }),
};
</script>
