import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import './index.ts';
import type { WdsButtonProps } from './index.ts';
import { defaultsProps } from './index.ts';

interface WdsButtonStory extends WdsButtonProps {
  content?: any;
}

const defaultRender = (args: WdsButtonStory) =>
  html`
    <wds-button
      type=${ifDefined(args.type)}
      ?disabled=${args.disabled}
      appearance=${ifDefined(args.appearance)}
      ?full-width=${args.fullWidth}
      ?danger=${args.danger}
    >${unsafeHTML(args.content)}</wds-button>
  `;

const meta: Meta<WdsButtonStory> = {
  title: 'Web/Labs/Button',
  tags: ['autodocs'],
  component: 'wds-button',
  render: defaultRender,
  argTypes: {
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    appearance: {
      control: 'select',
      options: ['default', 'accent'],
    },
  },
};

export default meta;
type Story = StoryObj<WdsButtonStory>

export const Default: Story = {
  args: {
    ...defaultsProps,
    content: 'Button',
  },
};

export const Appearance: Story = {
  render: (args) => html`
    ${defaultRender({
      ...args,
    })}
    ${defaultRender({
      ...args,
      appearance: 'accent',
    })}
  `,
  args: {
    ...defaultsProps,
    content: 'Button',
  },
};

export const States: Story = {
  render: (args) => html`
    ${defaultRender({
      ...args,
      disabled: true,
    })}
    ${defaultRender({
      ...args,
      appearance: 'accent',
      disabled: true,
    })}

    ${defaultRender({
      ...args,
      danger: true,
    })}
    ${defaultRender({
      ...args,
      appearance: 'accent',
      danger: true,
    })}

    ${defaultRender({
      ...args,
      disabled: true,
      danger: true,
    })}
    ${defaultRender({
      ...args,
      appearance: 'accent',
      disabled: true,
      danger: true,
    })}

    ${defaultRender({
      ...args,
      fullWidth: true,
    })}
    ${defaultRender({
      ...args,
      appearance: 'accent',
      fullWidth: true,
    })}

    ${defaultRender({
      ...args,
      danger: true,
      fullWidth: true,
    })}
    ${defaultRender({
      ...args,
      appearance: 'accent',
      danger: true,
      fullWidth: true,
    })}

    ${defaultRender({
      ...args,
      disabled: true,
      danger: true,
      fullWidth: true,
    })}
    ${defaultRender({
      ...args,
      appearance: 'accent',
      disabled: true,
      danger: true,
      fullWidth: true,
    })}
  `,
  args: {
    ...defaultsProps,
    content: 'Button',
  },
};

export const Form: Story = {
  render: (args) => html`
    <form>
      <label>Demo</label>

      <input type="text" name="demo" />

      ${defaultRender({
        ...args,
        type: 'reset',
        content: 'Reset',
      })}
      ${defaultRender({
        ...args,
        appearance: 'accent',
        content: 'Submit',
      })}
    </form>
  `,
  args: {
    ...defaultsProps,
  },
};
