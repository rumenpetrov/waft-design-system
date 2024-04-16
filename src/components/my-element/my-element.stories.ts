import type { Meta, StoryObj } from '@storybook/web-components';
import './my-element.ts';

const meta: Meta = {
  title: 'Web/Labs/MyElement',
  tags: ['autodocs'],
  component: 'my-element',
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    docsHint: 'Hell world',
    count: 5,
  },
};