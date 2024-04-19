import { LitElement, unsafeCSS, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js';
import { getWebTokenValue } from '../../design-tokens';

type Type = 'button' | 'submit' | 'reset';
type Appearance = 'accent' | 'default';

export interface WdsButtonProps {
  type: Type;
  disabled?: boolean;
  appearance?: Appearance;
  fullWidth?: boolean;
  danger?: boolean;
}

export const defaultsProps = {
  type: 'submit',
  disabled: false,
  appearance: 'default',
  fullWidth: false,
  danger: false,
} as WdsButtonProps;

export const parts = {
  root: 'root',
};

/**
 * The Button component serves as a fundamental element for user interaction within web interfaces. It enables users to perform actions such as submitting forms or triggering specific functionalities.
 *
 * @slot - This element has a slot
 * @csspart root - The button
 */
@customElement('wds-button')
export class WdsButton extends LitElement implements WdsButtonProps {
  // Allows interacting with parent form
  static get formAssociated() {
    return true;
  }

  /**
   * Provides access to the internals of the host
   */
  @property({ type: Object })
  _internals = this.attachInternals()

  /**
   * The type attribute of a native button
   */
  @property({ type: String })
  type: Type = defaultsProps.type


  /**
   * Whether or not the button is disabled.
   */
  @property({ type: Boolean, reflect: true })
  disabled = defaultsProps.disabled;

  /**
   * The visual appearance of the element
   */
  @property({ type: String })
  appearance?: Appearance = defaultsProps.appearance

  /**
   * Fill in the available width
   */
  @property({ type: Boolean, attribute: 'full-width', reflect: true })
  fullWidth = defaultsProps.fullWidth

  /**
   * Danger indicator
   */
  @property({ type: Boolean, reflect: true })
  danger = defaultsProps.danger

  render() {
    const classes = {
      root: true,
    };

    return html`
      <button
        type=${this.type}
        ?disabled=${this.disabled}
        class=${classMap(classes)}
        part=${parts.root}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `;
  }

  private _handleClick() {
    const { form } = this._internals;

    if (form) {
      switch (this.type) {
        case 'submit': {
          form.requestSubmit();
          break;
        }

        case 'reset': {
          form.reset();
          break;
        }

        case 'button':
        default: {
          break;
        }
      }
    }
  }

  // It is safe to set the tokens because they are defined in internal file.
  static styles = [
    css`
      :host {
        --_wds-button--border-radius: var(--wds-button--border-radius, ${unsafeCSS(getWebTokenValue('WDS-BUTTON--BORDER-RADIUS'))});
        --_wds-button--padding-x: var(--wds-button--padding-x, ${unsafeCSS(getWebTokenValue('WDS-BUTTON--PADDING-X'))});
        --_wds-button--padding-y: var(--wds-button--padding-y, ${unsafeCSS(getWebTokenValue('WDS-BUTTON--PADDING-Y'))});
        --_wds-button--focus-color: var(--wds-button--focus-color, ${unsafeCSS(getWebTokenValue('WDS-BUTTON--FOCUS-COLOR'))});
        --_wds-button--accent--background-color: var(--wds-button--accent--background-color, ${unsafeCSS(getWebTokenValue('WDS-BUTTON--ACCENT--BACKGROUND-COLOR'))});
        --_wds-button--accent--color: var(--wds-button--accent--color, ${unsafeCSS(getWebTokenValue('WDS-BUTTON--ACCENT--COLOR'))});
        --_wds-button--danger--background-color: var(--wds-button--danger--background-color, ${unsafeCSS(getWebTokenValue('WDS-BUTTON--DANGER--BACKGROUND-COLOR'))});
        --_wds-button--danger--color: var(--wds-button--danger--color, ${unsafeCSS(getWebTokenValue('WDS-BUTTON--DANGER--COLOR'))});
        --_wds-button--color-mix-method: var(--wds-button--color-mix-method, ${unsafeCSS(getWebTokenValue('WDS-BUTTON--COLOR-MIX-METHOD'))});
        --_wds-button--transition-duration: var(--wds-button--transition-duration, ${unsafeCSS(getWebTokenValue('WDS-BUTTON--TRANSITION-DURATION'))});
        --_wds-button--transition-timing-function: var(--wds-button--transition-timing-function, ${unsafeCSS(getWebTokenValue('WDS-BUTTON--TRANSITION-TIMING-FUNCTION'))});
      }

      .root {
        box-sizing: border-box;
        display: inline-block;
        border: none;
        border-radius: var(--_wds-button--border-radius);
        padding-inline: var(--_wds-button--padding-x);
        padding-block: var(--_wds-button--padding-y);
        font-size: 16px;
        line-height: 1;
        text-align: center;
        outline: 0;
        transition-property: background-color, color;
        transition-duration: var(--_wds-button--transition-duration);
        transition-timing-function: var(--_wds-button--transition-timing-function);
      }
      :host(:not([disabled]):not([danger])[appearance="accent"]) .root {
        background-color: var(--_wds-button--accent--background-color);
        color: var(--_wds-button--accent--color);
      }
      :host(:not([disabled]):not([danger])[appearance="accent"]:hover) .root {
        background-color: color-mix(in var(--_wds-button--color-mix-method), var(--_wds-button--accent--background-color) 80%, black);
      }
      :host([full-width]) .root {
        display: block;
        width: 100%;
      }
      :host([disabled][appearance="accent"]) .root {
        background-color: color-mix(in var(--_wds-button--color-mix-method), var(--_wds-button--accent--background-color) 80%, white);
        color: var(--_wds-button--accent--color);
      }
      :host(:not([disabled]):active) .root,
      :host(:not([disabled]):focus) .root,
      :host(:not([disabled]):focus-visible) .root,
      :host(:not([disabled]):focus-within) .root {
        outline-width: 2px;
        outline-style: dashed;
        outline-offset: 2px;
        outline-color: var(--_wds-button--focus-color);
      }
      :host(:not([disabled]):active) .root {
        outline-offset: 4px;
      }
      :host(:not([disabled])[danger]) .root {
        background-color: var(--_wds-button--danger--background-color);
        color: var(--_wds-button--danger--color);
      }
    `
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    'wds-button': WdsButton
  }
}

export default WdsButton;
