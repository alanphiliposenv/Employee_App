import { fireEvent, render, screen } from '@testing-library/react';
import FormDropdown, { DropdownOptionsType, FormDropdownPropType } from './FormDropdown';
import '@testing-library/jest-dom';

describe('if FormDroppdown works properly', () => {
  test('if label rendered correctly', () => {
    const FormDropdownProps: FormDropdownPropType = {
      label: 'label-text',
      options: [] as DropdownOptionsType[],
      value: ''
    };

    render(<FormDropdown {...FormDropdownProps} />);
    const element = screen.getByTestId('form-dropdown-label');

    expect(element).toHaveTextContent('label-text');
  });
  test('if placeholder rendered correctly', () => {
    const FormDropdownProps: FormDropdownPropType = {
      placeholder: 'placeholder-text',
      options: [] as DropdownOptionsType[],
      value: ''
    };

    render(<FormDropdown {...FormDropdownProps} />);
    const element = screen.getByTestId('form-dropdown-placeholder');

    expect(element).toHaveTextContent('placeholder-text');
  });
  test('if options rendered correctly', () => {
    const options = [
      { label: 'label1', value: 'value1' },
      { label: 'label2', value: 'value2' },
      { label: 'label3', value: 'value3' },
      { label: 'label4', value: 'value4' }
    ];
    const FormDropdownProps: FormDropdownPropType = {
      options,
      value: ''
    };

    render(<FormDropdown {...FormDropdownProps} />);
    const elements = screen.getAllByTestId('form-dropdown-option');

    expect(elements.length).toBe(4);
    for (const opt of options) {
      const element = elements.find((element) => element.getAttribute('value') === opt.value);

      expect(element).toHaveTextContent(opt.label);
    }
  });
  test('if onChange is triggered', () => {
    const options = [
      { label: 'label1', value: 'value1' },
      { label: 'label2', value: 'value2' },
      { label: 'label3', value: 'value3' },
      { label: 'label4', value: 'value4' }
    ];
    const onChange = jest.fn();
    const FormDropdownProps: FormDropdownPropType = {
      options,
      onChange,
      value: ''
    };

    render(<FormDropdown {...FormDropdownProps} />);
    const element = screen.getByTestId('form-dropdown-select');

    fireEvent.change(element, { target: { value: 'value2' } });
    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith('value2');
  });
  test('snapshot redered', () => {
    const options = [
      { label: 'label1', value: 'value1' },
      { label: 'label2', value: 'value2' },
      { label: 'label3', value: 'value3' },
      { label: 'label4', value: 'value4' }
    ];
    const FormDropdownProps: FormDropdownPropType = {
      options,
      value: ''
    };

    const element = render(<FormDropdown {...FormDropdownProps} />);

    expect(element).toMatchSnapshot();
  });
});
