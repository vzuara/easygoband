import { shallowMount } from '@vue/test-utils';
import MashTempMethod from '@/components/beerDetails/methods/MashTempMethod.vue';

describe('MashTempMethod.vue', () => {
  it('renders props.msg when passed', () => {
    const msgs = [
      {
        temp: {
          value: '65',
          unit: 'celsius',
        },
        duration: '75',
      },
    ];

    const wrapper = shallowMount(MashTempMethod, {
      propsData: { data: msgs },
    });

    msgs.forEach((msg) => {
      expect(wrapper.text()).toContain(`Temp: ${msg.temp.value}`);
      expect(wrapper.text()).toContain(`Duration: ${msg.duration}`);
    });
  });

  it('props required', async () => {
    expect(MashTempMethod.props).toMatchObject({
      data: {
        type: Array,
        required: true,
      },
    });
  });
});
