import React from "react";
import hello from "./reducers/hello.js";
import todos from "./reducers/todos-reducer.js";
import HelloReduxExampleComponent from "./hello-redux-example-component.js";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import Todos from "./todos-component";
const store=configureStore({
  reducer:{hello,todos}
})
const ReduxExamples = () => {
  return(
      <Provider store={store}>
        <div>
          <h2>Redux Examples</h2>
          <HelloReduxExampleComponent/>
        </div>
        <Todos/>
      </Provider>

  );
};

export default ReduxExamples;

