import { shallowMount } from '@vue/test-utils';
// import sinon from 'sinon';
import VideoListItem from '@/components/VideoListItem';

describe('VideoListItem.vue', () => {
  let title;
  let url;
  let data;
  let wrapper;

  beforeEach(() => {
    title = 'new title';
    url = 'https://img.org/img'
    data = { video: { snippet: { thumbnails: { default: { url } } , title } } };
    wrapper = shallowMount(VideoListItem, {
      propsData: data
    })
  })
  it('renders video list body', () => {
    expect(wrapper.find('.media-body').text()).toMatch(title);
  })

  it('renders video list image src', () => {
    expect(wrapper.find('img').attributes().src).toBe(url);
  })

  it('emit video select when button is clicked', () => {
    wrapper.find('li.list-group-item').trigger('click');
    expect(wrapper.emitted().videoSelect[0]).toEqual([data.video]);
  })
})
