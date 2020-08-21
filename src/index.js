import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import BlogPage from "views/LandingPage/LandingPage.js";
import NewsPage from "views/LandingPage/NewsPage.js";
import Galery from "views/ProfilePage/ProfilePage.js";
import DetailArticle from "views/LandingPage/Sections/DetailArticles";

//tentang kami
import Fasilitas from 'views/Components/TentangKami/Fasilitas';
import Sejarah from 'views/Components/TentangKami/Sejarah';
import VisiMisi from 'views/Components/TentangKami/VisiMisi';
import Sambutan from 'views/Components/TentangKami/SambutanPembina';
import Achievments from 'views/Components/pages/Achievement';
import JenjangPendidikan from 'views/Components/TentangKami/JenjangPendidikan';

//service online
import LoginPage from "views/LoginPage/LoginPage.js";
import Admission from "views/Components/ServiceOnline/Pendaftaran";
import Permission from "views/Components/ServiceOnline/Perijinan";
import PaymentInfo from "views/Components/ServiceOnline/InfoPembayaran";

//profile
import DetailProfile from "views/ProfilePage/DetailProfil";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/profile/:id" component={DetailProfile} />
      <Route path="/news/:id" component={DetailArticle} />
      <Route path="/news" component={NewsPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/galery" component={Galery} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/jenjang-pendidikan" component={JenjangPendidikan} />
      <Route path="/fasilitas" component={Fasilitas} />
      <Route path="/sejarah" component={Sejarah} />
      <Route path="/visimisi" component={VisiMisi} />
      <Route path="/sambutan" component={Sambutan} />
      <Route path="/achievments" component={Achievments} />
      <Route path="/admission" component={Admission} />
      <Route path="/perijinan" component={Permission} />
      <Route path="/pembayaran" component={PaymentInfo} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
