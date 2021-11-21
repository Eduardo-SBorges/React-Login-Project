import * as React from 'react';
import Login from '../Screen/Login';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("[Login's Component] must be in the document.", () => {
  const component = render(<Login />);

  test('This must be in the document.', () => {
    expect(component.getByTestId('test-Login-component')).toBeInTheDocument();
  });

  test("This must have CSS's styles.", () => {
    const component = render(<Login />);

    expect(component.getByTestId('test-Login-component')).toHaveStyle({
      display: 'flsex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      background: 'linear-gradient(180deg, #33383d 0%, #1c1d20 100%)',
      color: '#fff',
      height: '100vh',
    });
  });
});
