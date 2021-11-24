import * as React from 'react';
import HomeFooter from '../containers/HomeFooter';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("[HomeFooter's Component] must render in the home page.", () => {
  test("[HomeFooter's Component] must render in the home page", () => {
    const component = render(<HomeFooter />);

    expect(
      component.getByTestId("test-HomeFooter-component"),
    ).toBeInTheDocument();
  });

  test("[HomeFooter's Component] must have CSS's styles.", () => {
    const component = render(<HomeFooter />);

    expect(component.getByTestId('test-HomeFooter-component')).toHaveStyle({
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "13vh",
      background: "linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%)",
    });
  });
});
