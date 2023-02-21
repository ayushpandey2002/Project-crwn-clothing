import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import {
  Route,
  Switch,
  // BrowserRouter as Router,
  // withRouter,
} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";

function App() {
  return (
    <div>
      <Header />
      {/* <Router> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ShopPage} />
      </Switch>
      {/* </Router> */}
    </div>
  );
}

export default App;
