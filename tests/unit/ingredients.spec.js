import { shallowMount } from '@vue/test-utils';
import Ingredients from '@/components/beerDetails/Ingredients.vue';

describe('Ingredients.vue', () => {
  it('renders props.msg when passed', () => {
    const data = {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 5.3,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Ahtanum',
          amount: {
            value: 17.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Chinook',
          amount: {
            value: 15,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    };

    const msg1 = 'Ingredients MALT mdi-heart';
    const msg2 = 'Extra Pale 5.3 kilograms';
    const msg3 = 'HOPS mdi-heart';
    const msg4 = 'Ahtanum 17.5 grams';
    const msg5 = 'mdi-heart';
    const msg6 = 'Chinook 15 grams';
    const msg7 = 'YEAST  Wyeast 1056 - American Ale™';

    const wrapper = shallowMount(Ingredients, {
      propsData: { ingredients: data },
    });
    expect(wrapper.text()).toContain(msg1);
    expect(wrapper.text()).toContain(msg2);
    expect(wrapper.text()).toContain(msg3);
    expect(wrapper.text()).toContain(msg4);
    expect(wrapper.text()).toContain(msg5);
    expect(wrapper.text()).toContain(msg6);
    expect(wrapper.text()).toContain(msg7);
  });

  it('props required', async () => {
    expect(Ingredients.props).toMatchObject({
      ingredients: {
        type: Object,
        required: true,
      },
    });
  });
});
