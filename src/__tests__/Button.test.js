import * as React from 'react';
import { render } from '@testing-library/react';
import Button from '../components/Button';
import '@testing-library/jest-dom';

describe("[Text's Component] must be in the document.", () => {
  test("This must have a text 'Continuar'.", () => {
    const component = render(<Button />);
    expect(component.getByText('Continuar')).toBeInTheDocument();
  });

  test("This must have CSS's styles.", () => {
    const component = render(<Button />);
    expect(component.getByRole('button')).toHaveStyle({
      color: 'white',
      borderRadius: '50px',
      border: 'none',
      background: 'linear-gradient(90deg, #FF2D04 0%, #C13216 100%)',
      padding: '5px 0',
      width: '50.5%',
    });
  });
});
