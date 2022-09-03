import { shallowMount } from '@vue/test-utils';
import Method from '@/components/beerDetails/Method.vue';
import Fermentation from '@/components/beerDetails/methods/FermentationMethod.vue';
import MashTemp from '@/components/beerDetails/methods/MashTempMethod.vue';
import Twist from '@/components/beerDetails/methods/TwistMethod.vue';

describe('Method.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 19.0,
          unit: 'celsius',
        },
      },
      twist:
        'Aged in whisky barrels with raspberries, tayberries and blackberries',
    };
    const wrapper = shallowMount(Method, {
      propsData: { methods: msg },
    });

    expect(wrapper.findComponent(MashTemp).exists()).toBe(true);
    expect(wrapper.findComponent(Fermentation).exists()).toBe(true);
    expect(wrapper.findComponent(Twist).exists()).toBe(true);
  });

  it('shoud not show Mash Temp', () => {
    const msg = {
      mash_temp: null,
      fermentation: {
        temp: {
          value: 19.0,
          unit: 'celsius',
        },
      },
      twist:
        'Aged in whisky barrels with raspberries, tayberries and blackberries',
    };
    const wrapper = shallowMount(Method, {
      propsData: { methods: msg },
    });

    expect(wrapper.findComponent(MashTemp).exists()).toBe(false);
    expect(wrapper.findComponent(Fermentation).exists()).toBe(true);
    expect(wrapper.findComponent(Twist).exists()).toBe(true);
  });

  it('shoud not show Fermentation', () => {
    const msg = {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 75,
        },
      ],
      fermentation: null,
      twist:
        'Aged in whisky barrels with raspberries, tayberries and blackberries',
    };
    const wrapper = shallowMount(Method, {
      propsData: { methods: msg },
    });

    expect(wrapper.findComponent(MashTemp).exists()).toBe(true);
    expect(wrapper.findComponent(Fermentation).exists()).toBe(false);
    expect(wrapper.findComponent(Twist).exists()).toBe(true);
  });

  it('should not show Twist Component', () => {
    const msg = {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 19.0,
          unit: 'celsius',
        },
      },
      twist: null,
    };
    const wrapper = shallowMount(Method, {
      propsData: { methods: msg },
    });

    expect(wrapper.findComponent(MashTemp).exists()).toBe(true);
    expect(wrapper.findComponent(Fermentation).exists()).toBe(true);
    expect(wrapper.findComponent(Twist).exists()).toBe(false);
  });
});
