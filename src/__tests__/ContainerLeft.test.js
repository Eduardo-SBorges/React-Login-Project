import * as React from 'react';
import ContainerLeft from '../Containers/ContainerLeft';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("[ContainerLeft's Component] must be in the document.", () => {
  const component = render(<ContainerLeft />);

  test('This must be in the document.', () => {
    expect(
      component.getByTestId('test-ContainerLeft-component'),
    ).toBeInTheDocument();
  });

  test("This must have CSS's styles.", () => {
    const component = render(<ContainerLeft />);

    expect(component.getByTestId('test-ContainerLeft-component')).toHaveStyle({
      display: 'flesx',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
    });
  });
});
