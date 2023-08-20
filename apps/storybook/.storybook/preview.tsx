import React from 'react';
import { Preview } from '@storybook/react';
import { lightThemeClass } from '@motionhungry/ui';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={lightThemeClass}>
        <Story className={lightThemeClass} />
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
