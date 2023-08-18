import { render } from '@testing-library/react';
import InfoText, { InfoTextPropTypes } from './InfoText';

describe('test for info text', () => {
  test('snapshot redered as text', () => {
    const InfoTextProps: InfoTextPropTypes = {
      type: 'text',
      value: 'text-type'
    };

    const element = render(<InfoText {...InfoTextProps} />);

    expect(element).toMatchSnapshot();
  });
  test('snapshot redered as status', () => {
    const InfoTextProps: InfoTextPropTypes = {
      type: 'address',
      value: {
        address_line_1: 'line1',
        address_line_2: 'line2',
        city: 'city',
        state: 'state',
        country: 'country',
        pincode: 'pincode'
      }
    };

    const element = render(<InfoText {...InfoTextProps} />);

    expect(element).toMatchSnapshot();
  });
  test('snapshot redered as status', () => {
    const InfoTextProps: InfoTextPropTypes = {
      type: 'status',
      value: 'active'
    };

    const element = render(<InfoText {...InfoTextProps} />);

    expect(element).toMatchSnapshot();
  });
});
