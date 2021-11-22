import * as React from 'react';
import Text from '../components/Text';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("[Text's Component] must render in the login forms.", () => {
  const component = render(<Text text="Teste" size="16px" color="black" />);

  test("[Text's Component] must render in the login forms.", () => {
    expect(component.getByTestId('test-text-component')).toBeInTheDocument();
  });

  test("[Text's Component] must have CSS's styles.", () => {
    const component = render(<Text text="Teste" size="16px" color="black" />);

    expect(component.getByTestId('test-text-component')).toHaveStyle({
      color: 'black',
      fontSize: '16px',
    });
  });
});
