import Footer from "../containers/HomeFooter";
import React from 'react';

export default {
    title: "Containers/Footer",
    component: Footer,
}

const Template = (args) => <Footer {...args} />;

export const MainFooter = Template.bind({});
MainFooter.args = {};