import * as React from 'react';
import Text from '../components/Text';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("[Text's Component] must be in the document.", () => {
  const component = render(<Text text="Teste" size="16px" color="black" />);

  test('This must be in the document.', () => {
    expect(component.getByTestId('test-text-component')).toBeInTheDocument();
  });

  test("This must have CSS's styles.", () => {
    const component = render(<Text text="Teste" size="16px" color="black" />);

    expect(component.getByTestId('test-text-component')).toHaveStyle({
      color: 'black',
      fontSize: '16px',
    });
  });
});
