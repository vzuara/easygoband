import { shallowMount } from '@vue/test-utils';
import TwistMethod from '@/components/beerDetails/methods/TwistMethod.vue';

describe('TwistMethod.vue', () => {
  it('renders props.msg when passed', () => {
    const msg =
      'Aged in whisky barrels with raspberries, tayberries and blackberries';

    const wrapper = shallowMount(TwistMethod, {
      propsData: { data: msg },
    });
    expect(wrapper.text()).toContain(msg);
  });

  it('props required', async () => {
    expect(TwistMethod.props).toMatchObject({
      data: {
        type: String,
        required: true,
      },
    });
  });
});
