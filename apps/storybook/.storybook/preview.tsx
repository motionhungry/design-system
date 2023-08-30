import React from 'react';
import { Preview } from '@storybook/react';
import { lightTheme } from '@motionhungry/ui-themes';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={lightTheme}>
        <Story className={lightTheme} />
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
