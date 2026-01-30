import { Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </>
  );
}
