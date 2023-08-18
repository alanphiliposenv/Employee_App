import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import FormInput, { InputPropTypes } from './FormInput';

describe('Tests for FormInput', () => {
  test('if type correctly rendered as text', () => {
    const FormInputProps: InputPropTypes = {
      type: 'text'
    };

    render(<FormInput {...FormInputProps} />);
    const element = screen.getByTestId('form-input-field');

    expect(element).toHaveAttribute('type', 'text');
    expect(element).not.toHaveAttribute('type', 'password');
  });
  test('if type correctly rendered as password', () => {
    const FormInputProps: InputPropTypes = {
      type: 'password'
    };

    render(<FormInput {...FormInputProps} />);
    const element = screen.getByTestId('form-input-field');

    expect(element).toHaveAttribute('type', 'password');
    expect(element).not.toHaveAttribute('type', 'text');
  });
  test('if label rendered correctly', () => {
    const FormInputProps: InputPropTypes = {
      label: 'label-text'
    };

    render(<FormInput {...FormInputProps} />);
    const element = screen.getByTestId('form-input-label');

    expect(element).toHaveTextContent('label-text');
    expect(element).not.toHaveTextContent('wrong-label');
  });
  test('if input not disabled when false', () => {
    const FormInputProps: InputPropTypes = {
      disabled: false
    };

    render(<FormInput {...FormInputProps} />);
    const element = screen.getByTestId('form-input-field');

    expect(element).not.toHaveAttribute('disabled');
  });
  test('if input disabled when true', () => {
    const FormInputProps: InputPropTypes = {
      disabled: true
    };

    render(<FormInput {...FormInputProps} />);
    const element = screen.getByTestId('form-input-field');

    expect(element).toHaveAttribute('disabled');
  });
  test('if placehold rendered correctly', () => {
    const FormInputProps: InputPropTypes = {
      placeholder: 'placeholder-text'
    };

    render(<FormInput {...FormInputProps} />);
    const element = screen.getByTestId('form-input-field');

    expect(element).toHaveAttribute('placeholder', 'placeholder-text');
    expect(element).not.toHaveAttribute('placeholder', 'wrong-placeholder');
  });
  test('if value rendered correctly', () => {
    const FormInputProps: InputPropTypes = {
      value: 'value-text'
    };

    render(<FormInput {...FormInputProps} />);
    const element = screen.getByTestId('form-input-field');

    expect(element).toHaveAttribute('value', 'value-text');
    expect(element).not.toHaveAttribute('value', 'wrong-value');
  });
  test('if onChangne rendered correctly', () => {
    const onChange = jest.fn();
    const FormInputProps: InputPropTypes = {
      value: 'value-text',
      onChange
    };

    render(<FormInput {...FormInputProps} />);
    const element = screen.getByTestId('form-input-field');

    expect(element).toHaveAttribute('value', 'value-text');
    fireEvent.change(element, { target: { value: 'new-value-text' } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('new-value-text');
  });
  test('snapshot redered', () => {
    const FormInputProps: InputPropTypes = {
      value: 'value-text',
      placeholder: 'placeholder-text',
      label: 'label-text'
    };

    const element = render(<FormInput {...FormInputProps} />);

    expect(element).toMatchSnapshot();
  });
});
