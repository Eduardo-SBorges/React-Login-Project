import React from "react";
import Input from "../components/Input";
import IconLogin from "../assets/svg/icon-user.svg";

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const MainInput = Template.bind({});
MainInput.args = {
  type: "text",
  placeholder: "Usuário",
  borderColor: 'black',
  src: IconLogin,
  alt: 'login',
  color: 'black'
}

