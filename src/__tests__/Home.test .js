import * as React from 'react';
import Home from '../screen/Home';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("[Home's Component] must render in the application when invocated.", () => {
  test("[Home's Component] must render in the application when invocated.", () => {
    const component = render(<Home />);

    expect(
      component.getByTestId("test-Home-component"),
    ).toBeInTheDocument();
  });

  test("[Home's Component] must have CSS's styles.", () => {
    const component = render(<Home />);

    expect(component.getByTestId('test-Home-component')).toHaveStyle({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    });
  });
});
