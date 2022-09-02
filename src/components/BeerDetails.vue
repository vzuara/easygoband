<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <Picture :img="beer.image_url" />
        <ChemicalData :chemicalInfo="getChemicalInfo()" />
      </v-col>
      <v-col cols="12" sm="6" md="8">
        <v-container>
          <v-row>
            <v-col>
              <Description :description="beer.description" />
            </v-col>
          </v-row>
          <v-row class="my-0 py-0">
            <v-col class="my-0 py-0">
              <Tagline :tagline="beer.tagline" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <FoodPairing :foods="beer.food_pairing" />
              <div class="mt-6">
                <Method :methods="beer.method" v-if="beer.method" />
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <Ingredients :ingredients="beer.ingredients" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Tips :tips="beer.brewers_tips" />
        <ContributedBy :person="beer.contributed_by" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Picture from './beerDetails/Picture.vue';
import Description from './beerDetails/Description.vue';
import Tagline from './beerDetails/Tagline.vue';
import Tips from './beerDetails/Tips.vue';
import FoodPairing from './beerDetails/FoodPairing.vue';
import ChemicalData from './beerDetails/ChemicalData.vue';
import Ingredients from './beerDetails/Ingredients.vue';
import Method from './beerDetails/Method.vue';
import ContributedBy from './beerDetails/ContributedBy.vue';

export default {
  name: 'BeerDetail',
  components: {
    Picture,
    Description,
    Tagline,
    Tips,
    FoodPairing,
    ChemicalData,
    Ingredients,
    Method,
    ContributedBy,
  },
  mounted() {
    this.getBeer(this.$route.params.id);
  },
  methods: {
    ...mapActions(['getBeer']),
    getChemicalInfo() {
      const {
        first_brewed,
        abv,
        ibu,
        target_fg,
        target_og,
        ebc,
        srm,
        ph,
        attenuation_level,
        volume,
        boil_volume,
      } = this.beer;

      return {
        first_brewed,
        abv,
        ibu,
        target_fg,
        target_og,
        ebc,
        srm,
        ph,
        attenuation_level,
        volume,
        boil_volume,
      };
    },
  },
  computed: {
    ...mapState({
      beer: (state) => state.beerModule.beer,
    }),
  },
};
</script>
