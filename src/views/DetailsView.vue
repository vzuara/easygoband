<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-toolbar color="indigo" dark>
            <v-toolbar-title>{{ title }}</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn @click="backToList" outlined small rounded>
              <v-icon>mdi-arrow-left-thick</v-icon> Back to list
            </v-btn>
          </v-toolbar>
          <BeerDetails />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import BeerDetails from '../components/BeerDetails.vue';

export default {
  name: 'DetailsView',
  components: {
    BeerDetails,
  },
  data: () => ({}),
  methods: {
    backToList() {
      this.$router.push({ name: 'beerList' });
    },
  },
  computed: {
    ...mapGetters({
      title: 'beerTitle',
    }),
  },
};
</script>
