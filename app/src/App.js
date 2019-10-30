import React, { Component, useState } from "react";
import { Drizzle } from '@drizzle/store';
import { DrizzleProvider, DrizzleContext } from "@drizzle/react-plugin";
import { LoadingContainer } from "@drizzle/react-components";

import "./App.css";

import drizzleOptions from "./drizzleOptions";
import MyContainer from "./MyContainer";

const drizzle = new Drizzle(drizzleOptions); 

function App() {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <LoadingContainer>
        <MyContainer />
      </LoadingContainer>
    </DrizzleContext.Provider>
  );
}

export default App;
