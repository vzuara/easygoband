import axios from 'axios';
import moment from 'moment';

const api = 'https://api.punkapi.com/v2/beers';

export const beerModule = {
  state: {
    beers: [],
    beer: {},
    page: 1,
    perPage: 10,
    filters: {},
    totalBeers: 2000,
  },
  getters: {
    beerTitle(state) {
      return state.beer.name;
    },
  },
  mutations: {
    setBeers(state, beers) {
      state.beers = beers;
    },
    setBeer(state, beer) {
      state.beer = beer;
    },
    setPage(state, page) {
      state.page = page;
    },
    setPerPage(state, perPage) {
      state.perPage = perPage;
    },
    setFilters(state, filters) {
      state.filters = filters;
    },
  },
  actions: {
    async getBeers(state) {
      const { page, perPage, filters } = state.state;
      let parameters = `?page=${page}`;
      if (perPage > 0) parameters += `&per_page=${perPage}`;

      if (filters) {
        const {
          name,
          yeast,
          hops,
          malt,
          food,
          brewed_after,
          brewed_before,
          abv_min,
          abv_max,
          ibu_min,
          ibu_max,
          ebc_min,
          ebc_max,
        } = filters;

        if (name) parameters += `&beer_name=${name}`;
        if (yeast) parameters += `&yeast=${yeast}`;
        if (hops) parameters += `&hops=${hops}`;
        if (malt) parameters += `&malt=${malt}`;
        if (food) parameters += `&food=${food}`;
        if (abv_min) parameters += `&abv_gt=${abv_min}`;
        if (abv_max) parameters += `&abv_lt=${abv_max}`;
        if (ibu_min) parameters += `&ibu_gt=${ibu_min}`;
        if (ibu_max) parameters += `&ibu_lt=${ibu_max}`;
        if (ebc_min) parameters += `&ebc_gt=${ebc_min}`;
        if (ebc_max) parameters += `&ebc_lt=${ebc_max}`;

        if (brewed_before) {
          const beforeDate = moment(brewed_before).format('MM/YYYY');
          parameters += `&brewed_before=${beforeDate}`;
        }

        if (brewed_after) {
          const afterDate = moment(brewed_after).format('MM/YYYY');
          parameters += `&brewed_after=${afterDate}`;
        }
      }

      try {
        const response = await axios.get(`${api}${parameters}`);
        state.commit('setBeers', response.data);
      } catch (error) {
        alert(error.message);
      }
    },
    async getBeer(state, id) {
      try {
        const response = await axios.get(`${api}/${id}`);
        state.commit('setBeer', response.data[0]);
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
