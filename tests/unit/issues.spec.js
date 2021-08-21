import { issues } from '@/components/issues'
import { mount } from '@vue/test-utils'

describe('issues', () => {
  it('complete emit of event loadIssues', async () => {
    const wrapper = mount(issues, {
      propsData: {
        issues: []
      }
    })

    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.emitted().loadIssues.length).toBe(1)
  })

  it('render correct count of issues', async () => {
    const issue = {
      body: 'text',
      user: {
        login: 'author'
      }
    }

    const wrapper = mount(issues, {
      propsData: {
        issues: Array.from({length: 3}).map(() => issue)
      }
    })

    expect(wrapper.find('.comments__list').exists()).toBe(false)
    
    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.findAll('.comments__item').length).toBe(3)
  })

  it('request for isuues if there are no issues', async () => {
    const issue = {
      body: 'text',
      user: {
        login: 'author'
      }
    }

    const wrapper = mount(issues, {
      propsData: {
        issues: Array.from({length: 3}).map(() => issue)
      }
    })
    
    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.emitted().loadIssues).toBeUndefined()
  })
})