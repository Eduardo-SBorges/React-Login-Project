import * as React from 'react';
import LoginForms from '../Containers/LoginForms';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("[LoginForms's Component] must render in the login page.", () => {
  const component = render(<LoginForms />);

  test("[LoginForms's Component] must render in the login page", () => {
    expect(
      component.getByTestId('test-LoginForms-component'),
    ).toBeInTheDocument();
  });

  test("[LoginForms's Component] must have CSS's styles.", () => {
    const component = render(<LoginForms />);

    expect(component.getByTestId('test-LoginForms-component')).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
    });
  });
});
