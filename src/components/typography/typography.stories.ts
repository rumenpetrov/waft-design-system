import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index.ts';
import type { WdsTypographyProps } from './index.ts';
import { defaultsProps } from './index.ts';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

interface WdsTypographyStory extends WdsTypographyProps {
  content?: any;
}

const defaultRender = (args: WdsTypographyStory) =>
  html`
    <wds-typography appearance=${args.appearance} no-margins=${args.noMargins}>
      ${unsafeHTML(args.content)}
    </wds-typography>
  `;

const meta: Meta<WdsTypographyStory> = {
  title: 'Web/Labs/Typography',
  tags: ['autodocs'],
  component: 'wds-typography',
  render: defaultRender,
  argTypes: {
    noMargins: {
      control: 'select',
      options: ['default', 'top', 'bottom', 'both'],
    },
    appearance: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
    },
    content: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<WdsTypographyStory>

export const Default: Story = {
  args: {
    ...defaultsProps,
    content: 'Lorem ipsum dolor sit amet',
  },
};

export const Types: Story = {
  render: (args) => html`
    ${defaultRender({
      ...args,
      content: '<wds-typography appearance="h1">h1 - Title</wds-typography>',
    })}
    ${defaultRender({
      ...args,
      content: '<wds-typography appearance="h2">h2 - Title</wds-typography>',
    })}
    ${defaultRender({
      ...args,
      content: '<wds-typography appearance="h3">h3 - Title</wds-typography>',
    })}
    ${defaultRender({
      ...args,
      content: '<wds-typography appearance="h4">h4 - Title</wds-typography>',
    })}
    ${defaultRender({
      ...args,
      content: '<wds-typography appearance="h5">h5 - Title</wds-typography>',
    })}
    ${defaultRender({
      ...args,
      content: '<wds-typography appearance="h6">h6 - Title</wds-typography>',
    })}
    ${defaultRender({
      ...args,
      content: '<wds-typography appearance="p">p - text</wds-typography>',
    })}
  `,
  args: {
    ...defaultsProps,
  },
};
