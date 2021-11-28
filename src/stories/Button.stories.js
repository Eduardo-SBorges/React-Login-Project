import Button from '../components/Button'
import React from "react";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const MainButton = Template.bind({});
MainButton.args = {
    btnText: 'Continuar'

};
