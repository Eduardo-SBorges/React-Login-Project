import * as React from 'react';
import ContainerRight from '../Containers/ContainerRight';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("[ContainerRight's Component] must be in the document.", () => {
  const component = render(<ContainerRight />);

  test('This must be in the document.', () => {
    expect(
      component.getByTestId('test-ContainerRight-component'),
    ).toBeInTheDocument();
  });

  test("This must have CSS's styles.", () => {
    const component = render(<ContainerRight />);

    expect(component.getByTestId('test-ContainerRight-component')).toHaveStyle({
      display: 'flesx',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '50%',
      height: '100%',
      backgroundSize: 'cover',
    });
  });
});
