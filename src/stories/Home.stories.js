import Home from "../screen/Home";
import React from "react";

export default {
  title: "Screens/Home",
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const MainHome = Template.bind({});
MainHome.args = {};
