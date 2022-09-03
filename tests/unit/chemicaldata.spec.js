import { shallowMount } from '@vue/test-utils';
import ChemicalData from '@/components/beerDetails/ChemicalData.vue';

describe('ChemicalData.vue', () => {
  it('renders props.msg when passed', () => {
    const data = {
      first_brewed: '11/2011',
      volume: {
        value: 1,
        unit: 'litters',
      },
      boil_volume: {
        value: 2,
        unit: 'litters',
      },
      abv: 3,
      ibu: 4,
      target_fg: 5,
      target_og: 6,
      ebc: 7,
      srm: 8,
      ph: 9,
      attenuation_level: 10,
    };

    const msg =
      'First brewed 11/2011 Volume: 1 litters Boil Volume: 2 litters ABV: 3 IBU: 4 FG: 5 OG: 6 EBC: 7 SRM: 8 PH: 9 Attenuation: 10';

    const wrapper = shallowMount(ChemicalData, {
      propsData: { chemicalInfo: data },
    });
    expect(wrapper.text()).toBe(msg);
  });

  it('props required', async () => {
    expect(ChemicalData.props).toMatchObject({
      chemicalInfo: {
        type: Object,
        required: true,
      },
    });
  });
});
