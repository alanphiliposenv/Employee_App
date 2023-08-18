import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Input, { InputPropTypes } from './LoginInput';

describe('Tests for LoginInput', () => {
  test('if type correctly rendered as text', () => {
    const InputProps: InputPropTypes = {
      type: 'text'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('login-input-field');

    expect(element).toHaveAttribute('type', 'text');
    expect(element).not.toHaveAttribute('type', 'password');
  });
  test('if type correctly rendered as password', () => {
    const InputProps: InputPropTypes = {
      type: 'password'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('login-input-field');

    expect(element).toHaveAttribute('type', 'password');
    expect(element).not.toHaveAttribute('type', 'text');
  });
  test('if label rendered correctly', () => {
    const InputProps: InputPropTypes = {
      label: 'label-text'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('login-input-label');

    expect(element).toHaveTextContent('label-text');
    expect(element).not.toHaveTextContent('wrong-label');
  });
  test('if value rendered correctly', () => {
    const InputProps: InputPropTypes = {
      value: 'value-text'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('login-input-field');

    expect(element).toHaveAttribute('value', 'value-text');
    expect(element).not.toHaveAttribute('value', 'wrong-value');
  });
  test('if onChangne rendered correctly', () => {
    const onChange = jest.fn();
    const InputProps: InputPropTypes = {
      value: 'value-text',
      onChange
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('login-input-field');

    expect(element).toHaveAttribute('value', 'value-text');
    fireEvent.change(element, { target: { value: 'new-value-text' } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('new-value-text');
  });
  test('snapshot redered', () => {
    const InputProps: InputPropTypes = {
      value: 'value-text',
      label: 'label-text'
    };

    const element = render(<Input {...InputProps} />);

    expect(element).toMatchSnapshot();
  });
});
