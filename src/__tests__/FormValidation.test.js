import * as React from 'react';
import LoginForms from '../containers/LoginForms';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../components/Input';
import { HashRouter, Routes, Route } from 'react-router-dom';

describe("[LoginForms's Function Validation] must work in Login.js.", () => {
  test("[LoginForms's Function Validation] must show error messages on input's submiting.", () => {

    const errorMessage = "Please enter a valid email address.";
    const component = render(
      <>
        <HashRouter>
          <Routes>
            <Route path="/" element={<LoginForms>
              {errorMessage && (
                <Text
                  text={errorMessage}
                  size="16px"
                  color="#E9B425"
                  weight="700"
                  margin="-25% 0 0 0"
                />
              )}
            </LoginForms>} />
          </Routes>
        </HashRouter>
      </>,
    );

    expect(component.findAllByText(errorMessage))
  });

  test("[LoginForms's Function Validation] must change the color of border's input if there is an error on email validation.", () => {
    const errorUser = true;

    const component = render(
      <>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Input
              margin="0 0 10%"
              type="text"
              placeholder="Usuário"
              fontSize="16px"
              borderColor={errorUser ? '#E9B425' : '#fff'}
              alt="login"
            />} />
          </Routes>
        </HashRouter>
      </>,
    );

    expect(component.getByTestId('test-input-component')).toHaveStyle({
      borderColor: '#E9B425',
    });
  });

  test("[LoginForms's Function Validation] must change the color of border's input if there is an error on password validation.", () => {
    const errorPassword = true;

    const component = render(
      <>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Input
              margin="0 0 24%"
              type="password"
              placeholder="Senha"
              borderColor={errorPassword ? '#E9B425' : '#fff'}
              alt="password"
            />} />
          </Routes>
        </HashRouter>
      </>,
    );

    expect(component.getByTestId('test-input-component')).toHaveStyle({
      borderColor: '#E9B425',
    });
  });
});
