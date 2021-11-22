import * as React from 'react';
import Input from '../components/Input';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("[Text's Component] must be in the document.", () => {
  test("This component must have a placeholder's text.", () => {
    const component = render(
      <Input type="text" placeholder="Usuário" src="" alt="" />,
    );

    expect(
      component.getByPlaceholderText(`${'Usuário' || 'Senha'}`),
    ).toBeInTheDocument();
  });

  test("This component must have CSS's styles.", () => {
    const component = render(
      <Input
        type="text"
        placeholder="Usuário"
        src=""
        alt=""
        data-testid="test-input-component"
      />,
    );
    expect(component.getByTestId('test-input-component')).toHaveStyle({
      backgroundColor: 'transparent',
      borderRadius: '50px',
      border: '1px solid #FFFFFF',
      height: '60px',
      width: '50%',
    });
  });
});
