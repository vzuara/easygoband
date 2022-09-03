import { shallowMount } from '@vue/test-utils';
import Description from '@/components/beerDetails/Description.vue';

describe('Description.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Description, {
      propsData: { description: msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it('props required', async () => {
    expect(Description.props).toMatchObject({
      description: {
        type: String,
        required: true,
      },
    });
  });
});
