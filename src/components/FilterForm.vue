<template>
  <v-card>
    <v-card-title class="text-h5"> Search beers by... </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              id="name"
              v-model="filters.name"
              clearable
              label="Name"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              id="yeast"
              v-model="filters.yeast"
              clearable
              label="Yeast"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              id="hops"
              v-model="filters.hops"
              clearable
              label="Hops"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <Calendar
              id="brewed_after"
              :max="filters.brewed_before"
              :label="'Brewed after'"
              v-model="filters.brewed_after"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <Calendar
              id="brewed_before"
              :min="filters.brewed_after"
              :label="'Brewed before'"
              v-model="filters.brewed_before"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              id="food"
              v-model="filters.food"
              clearable
              label="Food"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              id="malt"
              v-model="filters.malt"
              clearable
              label="Malt"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              id="abv_min"
              type="number"
              :max="filters.abv_max"
              v-model="filters.abv_min"
              clearable
              label="ABV Min"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              id="abv_max"
              type="number"
              :min="filters.abv_min"
              v-model="filters.abv_max"
              clearable
              label="ABV Max"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              id="ibu_min"
              type="number"
              :max="filters.ibu_max"
              v-model="filters.ibu_min"
              clearable
              label="IBU Min"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              id="ibu_max"
              type="number"
              :min="filters.ibu_min"
              v-model="filters.ibu_max"
              clearable
              label="IBU Max"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              id="ebc_min"
              type="number"
              :max="filters.ebc_max"
              v-model="filters.ebc_min"
              clearable
              label="EBC Min"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              id="ebc_max"
              type="number"
              :min="filters.ebc_min"
              v-model="filters.ebc_max"
              clearable
              label="EBC Max"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        id="searchBtn"
        color="green darken-1"
        outlined
        small
        rounded
        @click="search"
      >
        Search
      </v-btn>

      <v-btn
        id="cancelBtn"
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
