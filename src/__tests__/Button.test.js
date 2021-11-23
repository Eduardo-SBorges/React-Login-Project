import * as React from 'react';
import { render } from '@testing-library/react';
import Button from '../components/Button';
import '@testing-library/jest-dom';

describe("[Button's Component] must render in the login forms.", () => {
  test("[Button's Component] must have a text 'Continuar'.", () => {
    const component = render(<Button />);
    expect(component.getByText('Continuar')).toBeInTheDocument();
  });

  test("[Button's Component] must have CSS's styles.", () => {
    const component = render(<Button />);
    expect(component.getByRole('button')).toHaveStyle({
      color: 'white',
      borderRadius: '50px',
      border: 'none',
      background: 'linear-gradient(90deg, #FF2D04 0%, #C13216 100%)',
      padding: '5px 0',
      width: '100%',
    });
  });
});
