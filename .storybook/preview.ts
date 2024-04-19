import type { Preview } from "@storybook/web-components";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      // https://storybook.js.org/docs/writing-stories/naming-components-and-hierarchy#sorting-stories
      storySort: {
        method: 'alphabetical',
        order: ['Welcome', 'Foundations', ['Design principles', 'Design tokens'], 'Web', ['Get started', 'CSS variables', '*'], '*', 'Guides', 'Contribution'],
      },
    },
  },
};

export default preview;
