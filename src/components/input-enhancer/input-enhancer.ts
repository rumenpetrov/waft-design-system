import { LitElement, unsafeCSS, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { getWebTokenValue } from '../../design-tokens/index.ts';

export interface WdsInputEnhancerProps {
  fullWidth?: boolean;
}

export const defaultsProps = {
  fullWidth: false,
} as WdsInputEnhancerProps;

export const parts = {};

/**
 * The component provides styles for slotted native input elements
 *
 * @slot - This element has a slot
 */
@customElement('wds-input-enhancer')
export class WdsInputEnhancer extends LitElement implements WdsInputEnhancerProps {
  /**
   * Fill in the available width
   */
  @property({ type: Boolean, attribute: 'full-width', reflect: true })
  fullWidth = defaultsProps.fullWidth

  render() {
    return html`
      <slot></slot>
    `;
  }

  static styles = [
    css`
      :host {
        --_wds-input-enhancer--border-color: var(--wds-input-enhancer--border-color, ${unsafeCSS(getWebTokenValue('WDS-INPUT-ENHANCER--BORDER-COLOR'))});
        --_wds-input-enhancer--border-radius: var(--wds-input-enhancer--border-radius, ${unsafeCSS(getWebTokenValue('WDS-INPUT-ENHANCER--BORDER-RADIUS'))});
        --_wds-input-enhancer--padding-x: var(--wds-input-enhancer--padding-x, ${unsafeCSS(getWebTokenValue('WDS-INPUT-ENHANCER--PADDING-X'))});
        --_wds-input-enhancer--padding-y: var(--wds-input-enhancer--padding-y, ${unsafeCSS(getWebTokenValue('WDS-INPUT-ENHANCER--PADDING-Y'))});
        --_wds-input-enhancer--focus-color: var(--wds-input-enhancer--focus-color, ${unsafeCSS(getWebTokenValue('WDS-INPUT-ENHANCER--FOCUS-COLOR'))});
        --_wds-input-enhancer--error--border-color: var(--wds-input-enhancer--error--border-color, ${unsafeCSS(getWebTokenValue('WDS-INPUT-ENHANCER--ERROR--BORDER-COLOR'))});
        --_wds-input-enhancer--error--color: var(--wds-input-enhancer--error--color, ${unsafeCSS(getWebTokenValue('WDS-INPUT-ENHANCER--ERROR--COLOR'))});
        --_wds-input-enhancer--color-mix-method: var(--wds-input-enhancer--color-mix-method, ${unsafeCSS(getWebTokenValue('WDS-INPUT-ENHANCER--COLOR-MIX-METHOD'))});
        --_wds-input-enhancer--transition-duration: var(--wds-input-enhancer--transition-duration, ${unsafeCSS(getWebTokenValue('WDS-INPUT-ENHANCER--TRANSITION-DURATION'))});
        --_wds-input-enhancer--transition-timing-function: var(--wds-input-enhancer--transition-timing-function, ${unsafeCSS(getWebTokenValue('WDS-INPUT-ENHANCER--TRANSITION-TIMING-FUNCTION'))});
      }
      ::slotted(input) {
        box-sizing: border-box;
        display: inline-block;
        vertical-align: top;
        height: 48px;
        border: 2px solid var(--_wds-input-enhancer--border-color);
        border-radius: var(--_wds-input-enhancer--border-radius);
        padding-inline: var(--_wds-input-enhancer--padding-x);
        padding-block: calc(var(--_wds-input-enhancer--padding-y) - 4px);
        margin: 0;
        font-size: 16px;
        line-height: 1;
        text-align: left;
        outline: 0;
        transition-property: border-color, color;
        transition-duration: var(--_wds-input-enhancer--transition-duration);
        transition-timing-function: var(--_wds-input-enhancer--transition-timing-function);
      }
      ::slotted(input[type="radio"]),
      ::slotted(input[type="checkbox"]) {
        width: 24px;
        height: 24px;
      }
      ::slotted(input[type="color"]) {
        padding: 4px;
      }
      :host([full-width]) ::slotted(input:not([type="radio"]):not([type="checkbox"])) {
        display: block;
        width: 100%;
      }
      ::slotted(input[readonly]),
      ::slotted(input[disabled]) {
        border-color: color-mix(in var(--_wds-input-enhancer--color-mix-method), var(--_wds-input-enhancer--border-color) 50%, white);
      }
      ::slotted(input:not([disabled]):focus),
      ::slotted(input:not([disabled]):focus-visible),
      ::slotted(input:not([disabled]):focus-within) {
        border-color: var(--_wds-input-enhancer--focus-color);
        outline-width: 2px;
        outline-style: dashed;
        outline-offset: 2px;
        outline-color: var(--_wds-input-enhancer--focus-color);
      }

      ::slotted(input:not([disabled]):invalid) {
        accent-color: var(--_wds-input-enhancer--error--border-color);
        border-color: var(--_wds-input-enhancer--error--border-color);
        color: var(--_wds-input-enhancer--error--color);
      }
    `
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    'wds-input-enhancer': WdsInputEnhancer
  }
}

export default WdsInputEnhancer;
