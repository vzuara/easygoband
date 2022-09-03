import { shallowMount } from '@vue/test-utils';
import Picture from '@/components/beerDetails/Picture.vue';

describe('Picture.vue', () => {
  it('renders props.msg when passed', () => {
    const src = 'https://images.punkapi.com/v2/192.png';
    const wrapper = shallowMount(Picture, {
      propsData: { img: src },
    });

    const img = wrapper.find('v-img-stub');
    expect(img.attributes('src')).toBe(src);
  });

  it('props required', async () => {
    expect(Picture.props).toMatchObject({
      img: {
        type: String,
        required: true,
      },
    });
  });
});
