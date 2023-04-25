import { html } from 'lit'

import './Button'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: (args: any) => html`
    <swc-button
      appearance=${args.appearance}
      color=${args.color}
    >${args.label}</swc-button>
  `,
  argTypes: {
    appearance: {
      control: 'inline-radio',
      options: ['raised', 'outlined'],
      description: 'Specifies the visual style of the button. Available values are: `raised` & `outlined`'
    },
    color: {
      control: 'text',
      description: 'Specifies the color of the component, it can be those defined in the color palette, or in hexadecimal, rgb, rgba, hls format.'
    }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Basic = {
  args: {
    label: 'Raised button!'
  }
}

export const Outlined = {
  args: {
    appearance: 'outlined',
    label: 'Outlined button!'
  }
}
