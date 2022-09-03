import { shallowMount } from '@vue/test-utils';
import ContributedBy from '@/components/beerDetails/ContributedBy.vue';

describe('ContributedBy.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(ContributedBy, {
      propsData: { person: msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it('props required', async () => {
    expect(ContributedBy.props).toMatchObject({
      person: {
        type: String,
        required: true,
      },
    });
  });
});
