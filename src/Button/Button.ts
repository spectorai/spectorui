import { CSSResultGroup, LitElement, css, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'

import styles from './Button.css?inline'

@customElement('swc-button')
export class Button extends LitElement {
  static styles?: CSSResultGroup | undefined = css`${unsafeCSS(styles)}`

  protected render (): unknown {
    return html`
      <button type="button">Click me!</button>
    `
  }
}
