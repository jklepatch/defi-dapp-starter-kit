import React from 'react';
import MyComponent from "./MyComponent";
import { DrizzleContext } from "@drizzle/react-plugin";

function MyContainer() {
  return (
    <DrizzleContext.Consumer>
      {({accounts}) => (
        <MyComponent accounts={accounts} />
      )}
    </DrizzleContext.Consumer>
  );
}

export default MyContainer;
