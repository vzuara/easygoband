import { shallowMount } from '@vue/test-utils';
import Tagline from '@/components/beerDetails/Tagline.vue';

describe('Tagline.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Tagline, {
      propsData: { tagline: msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it('props required', async () => {
    expect(Tagline.props).toMatchObject({
      tagline: {
        type: String,
        required: true,
      },
    });
  });
});
