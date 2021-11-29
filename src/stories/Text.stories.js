import Text from "../components/Text";
import React from "react";

export default {
  title: "Components/Text",
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const MainText = Template.bind({});
MainText.args = {
  text: "Continuar",
  color: "red",
  size: "16px",
  weight: "bold",
  margin: "0px",
};
