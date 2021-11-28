import React from "react";
import Input from "../components/Input";
import IconLogin from "../assets/svg/icon-user.svg";

export default {
  title: "Components/Input",
  component: Input,
};

export const MainInput = () => (
  <Input
  type="text"
  placeholder="Usuário"
  borderColor="black"
  src={IconLogin}
  alt="login"      
  color='black'
  />
);

// const Template = (args) => <Input {...args} />;
// export const MainInput = Template.bind({});
// MainInput.args = {
//     type="text",
//     placeholder="email",
//     IconLogin,
//     alt="email",
//     margin="0px",
//     borderColor="black",
//     fontSize="16px",
//     letterSpacing="0",
//     value="15px",
//     marginTop="10px",
//     dataCy="test",
// };
