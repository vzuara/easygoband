import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

import TopBar from '@//components/TopBar.vue';

describe('App.vue', () => {
  it('should be App', () => {
    const wrapper = shallowMount(App, {
      stubs: ['router-link', 'router-view'],
    });
    const main = wrapper.findComponent('v-main-stub');

    expect(main.html()).toBeTruthy();
    expect(wrapper.findComponent(TopBar).exists()).toBe(true);
  });
});
