import { LitElement, unsafeCSS, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js';
import { getWebTokenValue } from '../../design-tokens/index.ts';

export type Appearance = 'h1' | 'h2' | 'h3' | 'h4'| 'h5' | 'h6' | 'p';
export type NoMargins = 'default' | 'top' | 'bottom' | 'both';

export interface WdsTypographyProps {
  appearance: Appearance;
  noMargins: NoMargins;
}

export const defaultsProps = {
  appearance: 'p',
  noMargins: 'default',
} as WdsTypographyProps;

export const parts = {};

/**
 * Makes writing legible and beautiful
 */
@customElement('wds-typography')
export class WdsTypography extends LitElement implements WdsTypographyProps {
  /**
   * Removes the spacing around the element
   */
  @property({ type: String, reflect: true })
  appearance = defaultsProps.appearance

  /**
   * Removes the spacing around the element
   */
  @property({ type: String, attribute: 'no-margins', reflect: true })
  noMargins = defaultsProps.noMargins

  render() {
    const classRoot = classMap({
      [`no-margins--${this.noMargins}`]: Boolean(['top', 'bottom', 'both'].includes(this.noMargins)),
    });

    if (this.appearance === 'h1') {
      return html`<h1 part="root" class=${classRoot}><slot></slot></h1>`;
    }

    if (this.appearance === 'h2') {
      return html`<h2 part="root" class=${classRoot}><slot></slot></h2>`;
    }

    if (this.appearance === 'h3') {
      return html`<h3 part="root" class=${classRoot}><slot></slot></h3>`;
    }

    if (this.appearance === 'h4') {
      return html`<h4 part="root" class=${classRoot}><slot></slot></h4>`;
    }

    if (this.appearance === 'h5') {
      return html`<h5 part="root" class=${classRoot}><slot></slot></h5>`;
    }

    if (this.appearance === 'h6') {
      return html`<h6 part="root" class=${classRoot}><slot></slot></h6>`;
    }

    return html`<p part="root" class=${classRoot}><slot></slot></p>`;
  };

  static styles = [
    css`
      :host {
        --_wds-typography--h1--font-size: var(--wds-typography--h1--font-size, ${unsafeCSS(getWebTokenValue('WDS-TYPOGRAPHY--H1--FONT-SIZE'))});
        --_wds-typography--h1--line-height: var(--wds-typography--h1--line-height, ${unsafeCSS(getWebTokenValue('WDS-TYPOGRAPHY--H1--LINE-HEIGHT'))});
        --_wds-typography--h2--font-size: var(--wds-typography--h2--font-size, ${unsafeCSS(getWebTokenValue('WDS-TYPOGRAPHY--H2--FONT-SIZE'))});
        --_wds-typography--h2--line-height: var(--wds-typography--h2--line-height, ${unsafeCSS(getWebTokenValue('WDS-TYPOGRAPHY--H2--LINE-HEIGHT'))});
        --_wds-typography--h3--font-size: var(--wds-typography--h3--font-size, ${unsafeCSS(getWebTokenValue('WDS-TYPOGRAPHY--H3--FONT-SIZE'))});
        --_wds-typography--h3--line-height: var(--wds-typography--h3--line-height, ${unsafeCSS(getWebTokenValue('WDS-TYPOGRAPHY--H3--LINE-HEIGHT'))});
        --_wds-typography--h4--font-size: var(--wds-typography--h4--font-size, ${unsafeCSS(getWebTokenValue('WDS-TYPOGRAPHY--H4--FONT-SIZE'))});
        --_wds-typography--h4--line-height: var(--wds-typography--h4--line-height, ${unsafeCSS(getWebTokenValue('WDS-TYPOGRAPHY--H4--LINE-HEIGHT'))});
        --_wds-typography--h5--font-size: var(--wds-typography--h5--font-size, ${unsafeCSS(getWebTokenValue('WDS-TYPOGRAPHY--H5--FONT-SIZE'))});
        --_wds-typography--h5--line-height: var(--wds-typography--h5--line-height, ${unsafeCSS(getWebTokenValue('WDS-TYPOGRAPHY--H5--LINE-HEIGHT'))});
        --_wds-typography--h6--font-size: var(--wds-typography--h6--font-size, ${unsafeCSS(getWebTokenValue('WDS-TYPOGRAPHY--H6--FONT-SIZE'))});
        --_wds-typography--h6--line-height: var(--wds-typography--h6--line-height, ${unsafeCSS(getWebTokenValue('WDS-TYPOGRAPHY--H6--LINE-HEIGHT'))});
        --_wds-typography--p--font-size: var(--wds-typography--p--font-size, ${unsafeCSS(getWebTokenValue('WDS-TYPOGRAPHY--P--FONT-SIZE'))});
        --_wds-typography--p--line-height: var(--wds-typography--p--line-height, ${unsafeCSS(getWebTokenValue('WDS-TYPOGRAPHY--P--LINE-HEIGHT'))});
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 1em 0 0.5em;
      }
      h1 {
        font-size: var(--_wds-typography--h1--font-size);
        line-height: var(--_wds-typography--h1--line-height);
      }
      h2 {
        font-size: var(--_wds-typography--h2--font-size);
        line-height: var(--_wds-typography--h2--line-height);
      }
      h3 {
        font-size: var(--_wds-typography--h3--font-size);
        line-height: var(--_wds-typography--h3--line-height);
      }
      h4 {
        font-size: var(--_wds-typography--h4--font-size);
        line-height: var(--_wds-typography--h4--line-height);
      }
      h5 {
        font-size: var(--_wds-typography--h5--font-size);
        line-height: var(--_wds-typography--h5--line-height);
      }
      h6 {
        font-size: var(--_wds-typography--h6--font-size);
        line-height: var(--_wds-typography--h6--line-height);
      }
      p {
        margin: 0.5em 0;
        font-size: var(--_wds-typography--p--font-size);
        line-height: var(--_wds-typography--p--line-height);
      }
      .no-margins--top {
        margin-top: 0;
      }
      .no-margins--bottom {
        margin-bottom: 0;
      }
      .no-margins--both {
        margin-top: 0;
        margin-bottom: 0;
      }
    `
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    'wds-typography': WdsTypography
  }
}

export default WdsTypography;
