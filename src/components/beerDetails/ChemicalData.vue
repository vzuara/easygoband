<template>
  <v-container class="mx-5 my-3">
    <v-row>
      <v-col cols="6" lg="4" class="mb-0 pb-0">First brewed</v-col>
      <v-col cols="6" lg="8" class="mb-0 pb-0 font-weight-bold">{{
        chemicalInfo.first_brewed
      }}</v-col>
    </v-row>
    <v-row>
      <v-col cols="6" lg="4" class="my-0 py-0">Volume:</v-col>
      <v-col cols="6" lg="8" class="my-0 py-0 font-weight-bold">{{
        getData(chemicalInfo.volume)
      }}</v-col>
    </v-row>
    <v-row>
      <v-col cols="6" lg="4" class="my-0 py-0">Boil Volume:</v-col>
      <v-col cols="6" lg="8" class="my-0 py-0 font-weight-bold">{{
        getData(chemicalInfo.boil_volume)
      }}</v-col>
    </v-row>
    <v-row>
      <v-col cols="6" lg="4" class="my-0 py-0">ABV:</v-col>
      <v-col cols="6" lg="2" class="my-0 py-0 font-weight-bold">{{
        chemicalInfo.abv
      }}</v-col>
      <v-col cols="6" lg="4" class="my-0 py-0">IBU:</v-col>
      <v-col cols="6" lg="2" class="my-0 py-0 font-weight-bold">{{
        chemicalInfo.ibu
      }}</v-col>
    </v-row>
    <v-row>
      <v-col cols="6" lg="4" class="my-0 py-0">FG:</v-col>
      <v-col cols="6" lg="2" class="my-0 py-0 font-weight-bold">{{
        chemicalInfo.target_fg
      }}</v-col>
      <v-col cols="6" lg="4" class="my-0 py-0">OG:</v-col>
      <v-col cols="6" lg="2" class="my-0 py-0 font-weight-bold">{{
        chemicalInfo.target_og
      }}</v-col>
    </v-row>
    <v-row>
      <v-col cols="6" lg="4" class="my-0 py-0">EBC:</v-col>
      <v-col cols="6" lg="2" class="my-0 py-0 font-weight-bold">{{
        chemicalInfo.ebc
      }}</v-col>
      <v-col cols="6" lg="4" class="my-0 py-0">SRM:</v-col>
      <v-col cols="6" lg="2" class="my-0 py-0 font-weight-bold">{{
        chemicalInfo.srm
      }}</v-col>
    </v-row>
    <v-row>
      <v-col cols="6" lg="4" class="my-0 py-0">PH:</v-col>
      <v-col cols="6" lg="2" class="my-0 py-0 font-weight-bold">{{
        chemicalInfo.ph
      }}</v-col>
      <v-col cols="6" lg="4" class="my-0 py-0">Attenuation:</v-col>
      <v-col cols="6" lg="2" class="my-0 py-0 font-weight-bold">{{
        chemicalInfo.attenuation_level
      }}</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ChemicalData',
  props: {
    chemicalInfo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getData(data) {
      if (!data) return '';
      return `${data.value} ${data.unit}`;
    },
  },
};
</script>
