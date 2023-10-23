import "./styles.css";

import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import User from "./components/User";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <User userId={1}/>
    </div>
  </Provider>
);

export default App;
