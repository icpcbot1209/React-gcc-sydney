import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import LandingPage from "views/examples/LandingPage.js";
import AboutPage from "views/examples/AboutPage";
import BelievePage from "views/examples/BelievePage";
import ScrollToTop from "ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Switch>
      <Route
        path="/welcome"
        render={(props) => <LandingPage {...props} />}
      />
      
      <Route
        path="/about"
        render={(props) => <AboutPage {...props} />}
      />

      <Route
        path="/believe"
        render={(props) => <BelievePage {...props} />}
      />
      <Redirect to="/welcome" />
    </Switch>
  </BrowserRouter>
);
