import '@veer/themes/reset.css';
import { lightTheme } from '@veer/themes/default.css';
import { Preview } from '@storybook/react';
import React from 'react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={lightTheme}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
