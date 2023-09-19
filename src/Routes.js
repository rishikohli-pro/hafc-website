import { BrowserRouter as Route, Switch, Router } from "react-router-dom";
import { Homepage } from "./Pages/Homepage";
import { Thankyou } from "./Pages/Thankyou";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
        <Route path="/thankyou">
          <Thankyou />
        </Route>
      </Switch>
    </Router>
  );
};
