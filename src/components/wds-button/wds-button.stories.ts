import type { Meta, StoryObj } from '@storybook/web-components';
import { fn } from '@storybook/test';
import type { WdsButtonProps } from './wds-button';
import { WdsButton } from './wds-button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Web/Labs/WdsButton',
  tags: ['autodocs'],
  render: (args) => WdsButton(args),
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<WdsButtonProps>;

export default meta;
type Story = StoryObj<WdsButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
