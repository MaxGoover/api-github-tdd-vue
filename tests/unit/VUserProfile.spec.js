import { shallowMount } from '@vue/test-utils'
import VUserProfile from '@/components/VUserProfile'
import user from './fixtures/user'

describe('VUserProfile', () => {
  let props
  const build = () => {
    const wrapper = shallowMount(VUserProfile, {
      propsData: props
    })
    return {
      avatar: () => wrapper.find('.user-profile__avatar'),
      bio: () => wrapper.find('.user-profile__bio'),
      name: () => wrapper.find('.user-profile__name'),
      wrapper
    }
  }
  beforeEach(() => { props = { user } })

  it('renders the component', () => {
    // arrange
    const { wrapper } = build()

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main components', () => {
    // arrange
    const { avatar, name, bio } = build()

    // assert
    expect(avatar().exists()).toBe(true)
    expect(avatar().attributes().src).toBe(props.user.avatar_url)
    expect(name().exists()).toBe(true)
    expect(name().text()).toBe(props.user.name)
    expect(bio().exists()).toBe(true)
    expect(bio().text()).toBe(props.user.bio)
  })
})