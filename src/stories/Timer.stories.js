import Timer from "../components/Timer";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

export default {
  title: "Components/Timer",
  component: Timer,
};

const Template = (args) => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Timer {...args} />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export const MainTimer = Template.bind({});
MainTimer.args = {
  s = '5'
};
