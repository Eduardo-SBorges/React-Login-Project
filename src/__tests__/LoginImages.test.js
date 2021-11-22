import * as React from 'react';
import LoginImages from '../Containers/LoginImages';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("[LoginImages's Component] must render in the login page.", () => {
  const component = render(<LoginImages />);

  test("[LoginImages's Component] must render in the login page.", () => {
    expect(
      component.getByTestId('test-LoginImages-component'),
    ).toBeInTheDocument();
  });

  test("[LoginImages's Component] must have CSS's styles.", () => {
    const component = render(<LoginImages />);

    expect(component.getByTestId('test-LoginImages-component')).toHaveStyle({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '50%',
      height: '100%',
      backgroundSize: 'cover',
    });
  });
});
