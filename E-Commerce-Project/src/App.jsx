import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/product/:id" component={ProductDetailPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
