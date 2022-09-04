<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card>
          <v-toolbar color="indigo" dark>
            <v-toolbar-title>Beers List</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn id="filters" outlined small rounded @click="setDialog(true)">
              <v-icon>mdi-magnify</v-icon> Filters
            </v-btn>
          </v-toolbar>
          <BeerTable />
          <DialogFilter />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex';
import BeerTable from '../components/BeerTable.vue';
import DialogFilter from './../components/DialogFilter.vue';

export default {
  name: 'ListView',

  components: {
    BeerTable,
    DialogFilter,
  },
  data: () => ({
    search: '',
  }),
  methods: {
    ...mapMutations(['setDialog']),
  },
};
</script>
