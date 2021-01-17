import React from "react";
import { Switch, Route } from "react-router-dom";
import router from "./router/index";
import Navbar from "./components/Navbar";

const App = ({ appname }) => {
  // set or create storage for todos
  if (typeof Storage !== "undefined") {
    localStorage.getItem(appname) === null
      ? localStorage.setItem(appname, JSON.stringify([]))
      : localStorage.getItem(appname);
  }

  return (
    <div className="w-full min-h-screen bg-trueGray-100 text-trueGray-700">
      <Navbar appname={appname} />
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
