import React from 'react';
import Input from './components/Input';
import styled  from 'styled-components'

const X = styled.body`
  background-color: #1C1D20;
  height: 100vh;
`

const App = () => {
  return (
    <X>
      <h1>Hello World</h1>
      <Input placeholder="Usuário"/>
    </X>
  );
};

export default App;
