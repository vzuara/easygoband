import { shallowMount } from '@vue/test-utils';
import TopBar from '@/components/TopBar.vue';

describe('TopBar.vue', () => {
  it('should be rendered', () => {
    const wrapper = shallowMount(TopBar, {});

    const img = wrapper.find('v-img-stub');
    expect(img.html()).toBeTruthy();
  });
});
