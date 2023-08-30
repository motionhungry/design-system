import { fireEvent, render } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  const setup = (): { button: HTMLElement } => {
    const utils = render(<Button label="Test Button" />);
    const button = utils.getByText('Test Button');
    return {
      button,
      ...utils,
    };
  };

  it('should render the button as an <button> element', () => {
    const { button } = setup();
    expect(button.tagName).toEqual('BUTTON');
  });

  it('should have a label', () => {
    const { button } = setup();
    expect(button.textContent).toEqual('Test Button');
  });

  it('should handle the onClick event', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button label="Test Button" onClick={handleClick} />,
    );
    const button = getByText('Test Button');
    expect(handleClick).not.toHaveBeenCalled();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('should NOT handle the onClick event if disabled', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button disabled label="Test Button" onClick={handleClick} />,
    );
    const button = getByText('Test Button');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
