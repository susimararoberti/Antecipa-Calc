import { Route, Switch } from "react-router-dom";
import DashboardCalculo from "../pages/dashboard-calculo";
import Home from "../pages/home";

function Routes() {
  return (
    <Switch>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/dashboard" exact>
        <DashboardCalculo />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
