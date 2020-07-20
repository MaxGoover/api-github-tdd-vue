import {shallowMount} from '@vue/test-utils'
import UserView from '@/views/UserView'

describe('UserView', () => {
  it('renders the component', () => {
    // shallowMount - создаст экземпляр нашего компонента
    const wrapper = shallowMount(UserView)

    // assert
    expect(wrapper.html()).toMatchSnapshot()
    /*wrapper, который является представлением нашего компонента,
    созданного vue-test-utils, а затем мы «фотографируем» html
    нашего компонента (создаем snapshot). Этот HTML существует
    благодаря vue-test-utils.*/
  })
})