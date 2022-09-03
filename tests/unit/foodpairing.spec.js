import { shallowMount } from '@vue/test-utils';
import FoodPairing from '@/components/beerDetails/FoodPairing.vue';

describe('FoodPairing.vue', () => {
  it('renders props.msg when passed', () => {
    const msgs = [
      'Spicy carne asada with a pico de gallo sauce',
      'Shredded chicken tacos with a mango chilli lime salsa',
      'Cheesecake with a passion fruit swirl sauce',
    ];

    const wrapper = shallowMount(FoodPairing, {
      propsData: { foods: msgs },
    });

    msgs.forEach((msg) => {
      expect(wrapper.text()).toContain(msg);
    });
  });

  it('props required', async () => {
    expect(FoodPairing.props).toMatchObject({
      foods: {
        type: Array,
        required: true,
      },
    });
  });
});
