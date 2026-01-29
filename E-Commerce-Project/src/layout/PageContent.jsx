import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";


export default function PageContent() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    
    </Switch>
  );
}
