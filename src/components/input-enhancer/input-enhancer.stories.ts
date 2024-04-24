import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index.ts';
import type { WdsInputEnhancerProps } from './index.ts';
import { defaultsProps } from './index.ts';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

interface WdsInputEnhancerStory extends WdsInputEnhancerProps {
  content?: any;
}

const defaultRender = (args: WdsInputEnhancerStory) =>
  html`
    <wds-input-enhancer ?full-width=${args.fullWidth}>
      ${unsafeHTML(args.content)}
    </wds-input-enhancer>
  `;

const meta: Meta<WdsInputEnhancerStory> = {
  title: 'Web/Labs/InputEnhancer',
  tags: ['autodocs'],
  component: 'wds-input-enhancer',
  render: defaultRender,
  argTypes: {
    content: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<WdsInputEnhancerStory>

export const Default: Story = {
  args: {
    ...defaultsProps,
    content: '<input type="text" />',
  },
};

export const Types: Story = {
  render: (args) => html`
    <p>Text</p>
    ${defaultRender({
      ...args,
      content: '<input type="text" />',
    })}

    <p>Number</p>
    ${defaultRender({
      ...args,
      content: '<input type="number" />',
    })}

    <p>File</p>
    ${defaultRender({
      ...args,
      content: '<input type="file" />',
    })}

    <p>Color</p>
    ${defaultRender({
      ...args,
      content: '<input type="color" />',
    })}

    <p>Date</p>
    ${defaultRender({
      ...args,
      content: '<input type="date" />',
    })}

    <p>Time</p>
    ${defaultRender({
      ...args,
      content: '<input type="time" />',
    })}

    <p>DateTime local</p>
    ${defaultRender({
      ...args,
      content: '<input type="datetime-local" />',
    })}

    <p>Checkbox</p>
    ${defaultRender({
      ...args,
      content: '<input type="checkbox" />',
    })}

    <p>Radio</p>
    ${defaultRender({
      ...args,
      content: '<input type="radio" />',
    })}

    <p>Range</p>
    ${defaultRender({
      ...args,
      content: '<input type="range" />',
    })}

    <p>Submit</p>
    ${defaultRender({
      ...args,
      content: '<input type="submit" value="Don\'t use me" />',
    })}
  `,
  args: {
    ...defaultsProps,
  },
};

export const FullWidth: Story = {
  name: 'Full width',
  render: (args) => html`
    <p>Text</p>
    ${defaultRender({
      ...args,
      content: '<input type="text" />',
    })}

    <p>Number</p>
    ${defaultRender({
      ...args,
      content: '<input type="number" />',
    })}

    <p>File</p>
    ${defaultRender({
      ...args,
      content: '<input type="file" />',
    })}

    <p>Color</p>
    ${defaultRender({
      ...args,
      content: '<input type="color" />',
    })}

    <p>Date</p>
    ${defaultRender({
      ...args,
      content: '<input type="date" />',
    })}

    <p>Time</p>
    ${defaultRender({
      ...args,
      content: '<input type="time" />',
    })}

    <p>DateTime local</p>
    ${defaultRender({
      ...args,
      content: '<input type="datetime-local" />',
    })}

    <p>Checkbox</p>
    ${defaultRender({
      ...args,
      content: '<input type="checkbox" />',
    })}

    <p>Radio</p>
    ${defaultRender({
      ...args,
      content: '<input type="radio" />',
    })}

    <p>Range</p>
    ${defaultRender({
      ...args,
      content: '<input type="range" />',
    })}

    <p>Submit</p>
    ${defaultRender({
      ...args,
      content: '<input type="submit" value="Don\'t use me" />',
    })}
  `,
  args: {
    ...defaultsProps,
    fullWidth: true,
  },
};

export const Disabled: Story = {
  render: (args) => html`
    <p>Text</p>
    ${defaultRender({
      ...args,
      content: '<input type="text" disabled />',
    })}

    <p>Number</p>
    ${defaultRender({
      ...args,
      content: '<input type="number" disabled />',
    })}

    <p>File</p>
    ${defaultRender({
      ...args,
      content: '<input type="file" disabled />',
    })}

    <p>Color</p>
    ${defaultRender({
      ...args,
      content: '<input type="color" disabled />',
    })}

    <p>Date</p>
    ${defaultRender({
      ...args,
      content: '<input type="date" disabled />',
    })}

    <p>Time</p>
    ${defaultRender({
      ...args,
      content: '<input type="time" disabled />',
    })}

    <p>DateTime local</p>
    ${defaultRender({
      ...args,
      content: '<input type="datetime-local" disabled />',
    })}

    <p>Checkbox</p>
    ${defaultRender({
      ...args,
      content: '<input type="checkbox" disabled />',
    })}

    <p>Radio</p>
    ${defaultRender({
      ...args,
      content: '<input type="radio" disabled />',
    })}

    <p>Range</p>
    ${defaultRender({
      ...args,
      content: '<input type="range" disabled />',
    })}

    <p>Submit</p>
    ${defaultRender({
      ...args,
      content: '<input type="submit" value="Don\'t use me" disabled />',
    })}
  `,
  args: {
    ...defaultsProps,
  },
};
