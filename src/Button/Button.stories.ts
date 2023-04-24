import { html } from 'lit'

import './Button'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: (args: any) => html`
    <swc-button
      color=${args.color}
    >${args.label}</swc-button>
  `,
  argTypes: {
    color: {
      control: 'text',
      description: 'Specifies the color of the component, it can be those defined in the color palette, or in hexadecimal, rgb, rgba, hls format.'
    }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary = {
  args: {
    label: 'Click me!'
  }
}
