import * as React from 'react';
import Input from '../components/Input';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("[Input's Component] must render in the login forms.", () => {
  test("[Input's Component] must have a placeholder's text.", () => {
    const component = render(
      <Input type="text" placeholder="Usuário" src="" alt="" />,
    );

    expect(
      component.getByPlaceholderText(`${'Usuário' || 'Senha'}`),
    ).toBeInTheDocument();
  });

  test("[Input's Component] have CSS's styles.", () => {
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
