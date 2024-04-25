import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index.ts';
import type { WdsFormControlEnhancerProps } from './index.ts';
import { defaultsProps } from './index.ts';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

interface WdsFormControlEnhancerStory extends WdsFormControlEnhancerProps {
  content?: any;
}

const defaultRender = (args: WdsFormControlEnhancerStory) =>
  html`
    <wds-form-control-enhancer ?full-width=${args.fullWidth}>
      ${unsafeHTML(args.content)}
    </wds-form-control-enhancer>
  `;

const meta: Meta<WdsFormControlEnhancerStory> = {
  title: 'Web/Labs/FormControlEnhancer',
  tags: ['autodocs'],
  component: 'wds-form-control-enhancer',
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
type Story = StoryObj<WdsFormControlEnhancerStory>

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

    <p>Textarea</p>
    ${defaultRender({
      ...args,
      content: '<textarea name="textarea">textarea</textarea>',
    })}

    <p>Select</p>
    ${defaultRender({
      ...args,
      content: `
        <select>
          <option value="">Select option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
        </select>
      `,
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

    <p>Textarea</p>
    ${defaultRender({
      ...args,
      content: '<textarea name="textarea">textarea</textarea>',
    })}

    <p>Select</p>
    ${defaultRender({
      ...args,
      content: `
        <select>
          <option value="">Select option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
        </select>
      `,
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

    <p>Textarea</p>
    ${defaultRender({
      ...args,
      content: '<textarea name="textarea" disabled>textarea</textarea>',
    })}

    <p>Select</p>
    ${defaultRender({
      ...args,
      content: `
        <select disabled>
          <option value="">Select option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
        </select>
      `,
    })}
  `,
  args: {
    ...defaultsProps,
  },
};

export const Error: Story = {
  render: (args) => html`
    <p>Text</p>
    ${defaultRender({
      ...args,
      content: '<input type="text" required />',
    })}

    <p>Number</p>
    ${defaultRender({
      ...args,
      content: '<input type="number" required />',
    })}

    <p>File</p>
    ${defaultRender({
      ...args,
      content: '<input type="file" required />',
    })}

    <p>Date</p>
    ${defaultRender({
      ...args,
      content: '<input type="date" required />',
    })}

    <p>Time</p>
    ${defaultRender({
      ...args,
      content: '<input type="time" required />',
    })}

    <p>DateTime local</p>
    ${defaultRender({
      ...args,
      content: '<input type="datetime-local" required />',
    })}

    <p>Textarea</p>
    ${defaultRender({
      ...args,
      content: '<textarea name="textarea" required></textarea>',
    })}

    <p>Select</p>
    ${defaultRender({
      ...args,
      content: `
        <select required>
          <option value="">Select option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
        </select>
      `,
    })}
  `,
  args: {
    ...defaultsProps,
  },
};
