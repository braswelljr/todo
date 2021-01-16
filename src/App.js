import React from "react";
import { Switch, Route } from "react-router-dom";
import router from "./router/index";

const App = () => {
  const appname = `todo`;
  return (
    <div className="App">
      <Switch>
        {router.map((route, index) => (
          <Route
            path={route.path}
            exact={route.isExact}
            render={() => <route.component appname={appname} />}
            key={index}
          />
        ))}
      </Switch>
    </div>
  );
};

export default App;
