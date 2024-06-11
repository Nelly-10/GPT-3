import React from "react";

import {Brand, CTA, Navbar } from "./components";
import { Blog, Feature, Head, Possible, WhatGPT3, Foot } from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Head />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possible />
      <CTA />
      <Blog />
      <Foot />
    </div>
  );
};

export default App;
