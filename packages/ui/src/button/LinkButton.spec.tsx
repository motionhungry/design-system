import { render } from '@testing-library/react';

import { LinkButton } from './LinkButton';

describe('LinkButton', () => {
  const setup = () => {
    const utils = render(
      <LinkButton
        href="https://www.motionhungry.com"
        label="Test Link Button"
      />
    );
    const button = utils.getByText('Test Link Button');
    return {
      button,
      ...utils,
    };
  };

  it('should render the button as an <a> element', () => {
    const { button } = setup();
    expect(button.tagName).toEqual('A');
  });

  it('should pass through the href', () => {
    const { button } = setup();
    expect(button.getAttribute('href')).toEqual('https://www.motionhungry.com');
  });

  it('should have a label', () => {
    const { button } = setup();
    expect(button.textContent).toEqual('Test Link Button');
  });
});
