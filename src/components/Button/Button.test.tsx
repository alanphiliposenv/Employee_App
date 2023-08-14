import Button, { ButtonPropTypes } from './Button';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('if button works properly', () => {
  test('if label rendered correctly', () => {
    const ButtonProps: ButtonPropTypes = {
      text: 'button'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    expect(element).toHaveTextContent('button');
  });
  test('if type rendered correctly', () => {
    const ButtonProps: ButtonPropTypes = {
      type: 'filled'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    // expect(element).toHaveClass('filled');
    expect(element.getAttribute('class')).toContain('filled');
  });
  test('if onClick is triggered', () => {
    const onClick = jest.fn();
    const ButtonProps: ButtonPropTypes = {
      text: 'button',
      onClick
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    fireEvent.click(element);
    expect(onClick).toBeCalled();
  });
  test('snapshot redered', () => {
    const ButtonProps: ButtonPropTypes = {
      text: 'button'
    };

    const element = render(<Button {...ButtonProps} />);

    expect(element).toMatchSnapshot();
  });
});
