import { Switch, Route } from "react-router-dom";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/contact-me">
        <ContactMe />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
