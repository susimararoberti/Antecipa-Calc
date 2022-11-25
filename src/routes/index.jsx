import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";

function Routes() {
  return (
    <Switch>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
