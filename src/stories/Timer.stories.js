import Timer from '../components/Timer'
import React from "react";

export default {
  title: "Components/Timer",
  component: Timer,
};

const Template = (args) => <Timer {...args} />
export const MainTimer = Template.bind({});
MainTimer.args = {
  s = 5
};