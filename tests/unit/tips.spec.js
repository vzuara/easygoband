import { shallowMount } from '@vue/test-utils';
import Tips from '@/components/beerDetails/Tips.vue';

describe('Tips.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Tips, {
      propsData: { tips: msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it('props required', async () => {
    expect(Tips.props).toMatchObject({
      tips: {
        type: String,
        required: true,
      },
    });
  });
});
