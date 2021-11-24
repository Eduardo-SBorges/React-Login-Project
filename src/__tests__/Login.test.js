import * as React from 'react';
import Login from '../screen/Login';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("[Login's Screen] must render in the login page.", () => {
  test("[Login's Screen] must render in the login page", () => {
    const component = render(<Login />);
    expect(component.getByTestId('test-Login-component')).toBeInTheDocument();
  });

  test("[Login's Screen] must have CSS's styles.", () => {
    const component = render(<Login />);

    expect(component.getByTestId('test-Login-component')).toHaveStyle({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      background: 'linear-gradient(180deg, #33383d 0%, #1c1d20 100%)',
      color: '#fff',
      height: '100vh',
    });
  });
});
