import { LitElement, unsafeCSS, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { getWebTokenValue } from '../../design-tokens/index.ts';

export interface WdsFormControlEnhancerProps {
  fullWidth?: boolean;
}

export const defaultsProps = {
  fullWidth: false,
} as WdsFormControlEnhancerProps;

export const parts = {};

/**
 * The component provides styles for slotted native input elements
 *
 * @slot - This element has a slot
 */
@customElement('wds-form-control-enhancer')
export class WdsFormControlEnhancer extends LitElement implements WdsFormControlEnhancerProps {
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
        --_wds-form-control-enhancer--border-color: var(--wds-form-control-enhancer--border-color, ${unsafeCSS(getWebTokenValue('WDS-FORM-CONTROL-ENHANCER--BORDER-COLOR'))});
        --_wds-form-control-enhancer--border-radius: var(--wds-form-control-enhancer--border-radius, ${unsafeCSS(getWebTokenValue('WDS-FORM-CONTROL-ENHANCER--BORDER-RADIUS'))});
        --_wds-form-control-enhancer--padding-x: var(--wds-form-control-enhancer--padding-x, ${unsafeCSS(getWebTokenValue('WDS-FORM-CONTROL-ENHANCER--PADDING-X'))});
        --_wds-form-control-enhancer--padding-y: var(--wds-form-control-enhancer--padding-y, ${unsafeCSS(getWebTokenValue('WDS-FORM-CONTROL-ENHANCER--PADDING-Y'))});
        --_wds-form-control-enhancer--focus-color: var(--wds-form-control-enhancer--focus-color, ${unsafeCSS(getWebTokenValue('WDS-FORM-CONTROL-ENHANCER--FOCUS-COLOR'))});
        --_wds-form-control-enhancer--error--border-color: var(--wds-form-control-enhancer--error--border-color, ${unsafeCSS(getWebTokenValue('WDS-FORM-CONTROL-ENHANCER--ERROR--BORDER-COLOR'))});
        --_wds-form-control-enhancer--error--color: var(--wds-form-control-enhancer--error--color, ${unsafeCSS(getWebTokenValue('WDS-FORM-CONTROL-ENHANCER--ERROR--COLOR'))});
        --_wds-form-control-enhancer--color-mix-method: var(--wds-form-control-enhancer--color-mix-method, ${unsafeCSS(getWebTokenValue('WDS-FORM-CONTROL-ENHANCER--COLOR-MIX-METHOD'))});
        --_wds-form-control-enhancer--transition-duration: var(--wds-form-control-enhancer--transition-duration, ${unsafeCSS(getWebTokenValue('WDS-FORM-CONTROL-ENHANCER--TRANSITION-DURATION'))});
        --_wds-form-control-enhancer--transition-timing-function: var(--wds-form-control-enhancer--transition-timing-function, ${unsafeCSS(getWebTokenValue('WDS-FORM-CONTROL-ENHANCER--TRANSITION-TIMING-FUNCTION'))});
      }
      ::slotted(select),
      ::slotted(textarea),
      ::slotted(input) {
        box-sizing: border-box;
        display: inline-block;
        vertical-align: top;
        height: 48px;
        border: 2px solid var(--_wds-form-control-enhancer--border-color);
        border-radius: var(--_wds-form-control-enhancer--border-radius);
        padding-inline: var(--_wds-form-control-enhancer--padding-x);
        padding-block: calc(var(--_wds-form-control-enhancer--padding-y) - 4px);
        margin: 0;
        font-size: 16px;
        line-height: 1;
        text-align: left;
        outline: 0;
        transition-property: border-color, color;
        transition-duration: var(--_wds-form-control-enhancer--transition-duration);
        transition-timing-function: var(--_wds-form-control-enhancer--transition-timing-function);
      }
      ::slotted(textarea) {
        height: 96px;
        resize: none;
      }
      ::slotted(input[type="radio"]),
      ::slotted(input[type="checkbox"]) {
        width: 24px;
        height: 24px;
      }
      ::slotted(input[type="color"]) {
        padding: 4px;
      }
      :host([full-width]) ::slotted(:not([type="radio"]):not([type="checkbox"])) {
        display: block;
        width: 100%;
      }
      ::slotted(select[readonly]),
      ::slotted(select[disabled]),
      ::slotted(textarea[readonly]),
      ::slotted(textarea[disabled]),
      ::slotted(input[readonly]),
      ::slotted(input[disabled]) {
        border-color: color-mix(in var(--_wds-form-control-enhancer--color-mix-method), var(--_wds-form-control-enhancer--border-color) 50%, white);
      }
      ::slotted(select:not([disabled]):focus),
      ::slotted(select:not([disabled]):focus-visible),
      ::slotted(select:not([disabled]):focus-within),
      ::slotted(textarea:not([disabled]):focus),
      ::slotted(textarea:not([disabled]):focus-visible),
      ::slotted(textarea:not([disabled]):focus-within),
      ::slotted(input:not([disabled]):focus),
      ::slotted(input:not([disabled]):focus-visible),
      ::slotted(input:not([disabled]):focus-within) {
        border-color: var(--_wds-form-control-enhancer--focus-color);
        outline-width: 2px;
        outline-style: dashed;
        outline-offset: 2px;
        outline-color: var(--_wds-form-control-enhancer--focus-color);
      }

      ::slotted(select:not([disabled]):invalid),
      ::slotted(textarea:not([disabled]):invalid),
      ::slotted(input:not([disabled]):invalid),
      ::slotted(input:not([disabled]):out-of-range) {
        accent-color: var(--_wds-form-control-enhancer--error--border-color);
        border-color: var(--_wds-form-control-enhancer--error--border-color);
        color: var(--_wds-form-control-enhancer--error--color);
      }
    `
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    'wds-form-control-enhancer': WdsFormControlEnhancer
  }
}

export default WdsFormControlEnhancer;
