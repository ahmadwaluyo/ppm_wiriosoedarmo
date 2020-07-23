import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

//tentang kami
import Fasilitas from 'views/Components/TentangKami/Fasilitas';
import Sejarah from './views/Components/TentangKami/Sejarah';
import VisiMisi from './views/Components/TentangKami/VisiMisi';
import Sambutan from './views/Components/TentangKami/SambutanPembina';
import Achievments from './views/Components/pages/Achievement';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/fasilitas" component={Fasilitas} />
      <Route path="/sejarah" component={Sejarah} />
      <Route path="/visimisi" component={VisiMisi} />
      <Route path="/sambutan" component={Sambutan} />
      <Route path="/achievments" component={Achievments} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
