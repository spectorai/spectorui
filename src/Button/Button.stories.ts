import { html } from 'lit'

import './Button'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: (_args: any) => html`<swc-button></swc-button>`,
  argTypes: {}
}

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button'
  }
}
