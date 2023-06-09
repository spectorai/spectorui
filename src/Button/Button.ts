import { CSSResultGroup, LitElement, PropertyValueMap, css, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '../styles.css'
import styles from './Button.css?inline'

import { ColorNameMap } from '../declarations'
import { createRipple, getColor } from '../utils'

declare global {
  // eslint-disable-next-line no-unused-vars
  interface HTMLElementTagNameMap {
    'swc-button': Button
  }
}

export type Appearance = 'raised' | 'outlined' | 'standard'

@customElement('swc-button')
export class Button extends LitElement {
  static styles?: CSSResultGroup | undefined = css`${unsafeCSS(styles)}`

  @property({ type: String, reflect: true }) appearance: Appearance = 'raised'

  @property({ type: String, reflect: true }) color: string = 'deep-purple-accent-2'

  protected updated (changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (changedProperties.has('color')) {
      this.style.setProperty('--swc-button-bg-color', getColor(this.color as ColorNameMap) || this.color)
    }
  }

  protected render (): unknown {
    return html`
      <button
        type="button"
        class="button"
        @click=${(e: PointerEvent) => createRipple(e)}
      >
        <span class="button__hover"></span>

        <span class="ripple"></span>

        <div class="button__content">
          <slot></slot>
        </div>
      </button>
    `
  }
}
