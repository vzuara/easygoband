import { shallowMount } from '@vue/test-utils';
import FermentationMethod from '@/components/beerDetails/methods/FermentationMethod.vue';

describe('FermentationMethod.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = {
      temp: {
        value: '19.0',
        unit: 'celsius',
      },
    };
    const wrapper = shallowMount(FermentationMethod, {
      propsData: { data: msg },
    });
    expect(wrapper.text()).toContain(msg.temp.value);
  });

  it('props required', async () => {
    expect(FermentationMethod.props).toMatchObject({
      data: {
        type: Object,
        required: true,
      },
    });
  });
});
