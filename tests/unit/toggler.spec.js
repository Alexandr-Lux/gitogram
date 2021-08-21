import { shallowMount } from '@vue/test-utils'
import { toggler } from '@/components/toggler'

describe('toggler', () => {
  it("change title on click", async () => {
    const wrapper = shallowMount(toggler)

    expect(wrapper.find('.toggler__text').text()).toBe('Show issues')
    await wrapper.find('.toggler__btn').trigger('click')
    expect(wrapper.find('.toggler__text').text()).toBe('Hide issues')
  })
})
