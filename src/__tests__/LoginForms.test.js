import * as React from 'react';
import LoginForms from '../containers/LoginForms';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';

describe("[LoginForms's Component] must render in the login page.", () => {
  const component = render(
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginForms />} />
        </Routes>
      </HashRouter>
    </>,
  );

  test("[LoginForms's Component] must render in the login page", () => {
    expect(
      component.getByTestId('test-LoginForms-component'),
    ).toBeInTheDocument();
  });

  test("[LoginForms's Component] must have CSS's styles.", () => {
    const component = render(
      <>
        <HashRouter>
          <Routes>
            <Route path="/" element={<LoginForms />} />
          </Routes>
        </HashRouter>
      </>,
    );

    expect(component.getByTestId('test-LoginForms-component')).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
    });
  });
});
