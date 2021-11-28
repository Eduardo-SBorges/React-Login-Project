import Footer from "../containers/HomeFooter";
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";

export default {
    title: "Containers/Footer",
    component: Footer,
}

const Template = (args) => {
    return (
    <>
      <HashRouter>
          <Routes>
            <Route path="/" element={<Footer {...args} />} />
          </Routes>
      </HashRouter>
    </>
)};

export const MainFooter = Template.bind({});
MainFooter.args = {
  height: '20vh',
};