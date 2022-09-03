import { shallowMount, createLocalVue } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';
import DetailsView from '@/views/DetailsView.vue';
import Vuex from 'vuex';

import BeerTable from '@/components/BeerTable.vue';
import DialogFilter from '@/components/DialogFilter.vue';
import BeerDetails from '@/components/BeerDetails.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('All Views', () => {
  let store;
  let getters;

  beforeEach(() => {
    getters = {
      beerTitle: () => 'Title Testing',
    };

    store = new Vuex.Store({
      getters,
    });
  });

  it('should be HomeView', () => {
    const wrapper = shallowMount(HomeView);
    const title = wrapper.find('v-toolbar-title-stub');
    expect(title.text()).toBe('Beers List');
    expect(wrapper.findComponent(BeerTable).exists()).toBe(true);
    expect(wrapper.findComponent(DialogFilter).exists()).toBe(true);
  });

  it('should be DetailsView', () => {
    const wrapper = shallowMount(DetailsView, { store, localVue });
    const title = wrapper.find('v-toolbar-title-stub');
    expect(title.text()).toBe(getters.beerTitle());
    expect(wrapper.findComponent(BeerDetails).exists()).toBe(true);
  });
});
