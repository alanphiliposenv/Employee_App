import { fireEvent, render, screen } from '@testing-library/react';
import SubheaderBtn, { SubheaderPropTypes } from './SubheaderBtn';

describe('test for Subheader button', () => {
  test('if create button text rendered correctly ', () => {
    const SubheaderBtnProps: SubheaderPropTypes = {
      type: 'create'
    };

    render(<SubheaderBtn {...SubheaderBtnProps} />);
    const element = screen.getByTestId('subheader-btn-text');

    expect(element.innerHTML).toBe('Create Employee');
    expect(element.innerHTML).not.toBe('Edit Employee');
  });
  test('if edit button text rendered correctly ', () => {
    const SubheaderBtnProps: SubheaderPropTypes = {
      type: 'edit'
    };

    render(<SubheaderBtn {...SubheaderBtnProps} />);
    const element = screen.getByTestId('subheader-btn-text');

    expect(element.innerHTML).toBe('Edit Employee');
    expect(element.innerHTML).not.toBe('Create Employee');
  });
  test('if onClick is triggered', () => {
    const onClick = jest.fn();
    const SubheaderBtnProps: SubheaderPropTypes = {
      type: 'create',
      onClick
    };

    render(<SubheaderBtn {...SubheaderBtnProps} />);
    const element = screen.getByTestId('subheader-btn');

    fireEvent.click(element);
    expect(onClick).toBeCalledTimes(1);
  });
  test('snapshot redered with create', () => {
    const SubheaderBtnProps: SubheaderPropTypes = {
      type: 'create'
    };

    const element = render(<SubheaderBtn {...SubheaderBtnProps} />);

    expect(element).toMatchSnapshot();
  });
  test('snapshot redered with edit', () => {
    const SubheaderBtnProps: SubheaderPropTypes = {
      type: 'edit'
    };

    const element = render(<SubheaderBtn {...SubheaderBtnProps} />);

    expect(element).toMatchSnapshot();
  });
});
