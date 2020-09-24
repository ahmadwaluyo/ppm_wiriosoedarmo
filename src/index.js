import React, { lazy } from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider } from 'notistack';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";
import "assets/css/loading.css";

//dashboard admin
const Dashboard = lazy(() => import("views/Dashboard/admin"));

// pages for this product
const Components = lazy(() => import("views/Components/Components.js"));
const BlogPage = lazy(() => import("views/LandingPage/LandingPage.js"));
const NewsPage = lazy(() => import("views/LandingPage/NewsPage.js"));
const Galery = lazy(() => import("views/ProfilePage/ProfilePage.js"));
const DetailArticle = lazy(() => import("views/LandingPage/Sections/DetailArticles"));

//tentang kami
const Fasilitas = lazy(() => import("views/Components/TentangKami/Fasilitas"));
const Sejarah = lazy(() => import("views/Components/TentangKami/Sejarah"));
const VisiMisi = lazy(() => import("views/Components/TentangKami/VisiMisi"));
const Sambutan = lazy(() => import("views/Components/TentangKami/SambutanPembina"));
const Achievments = lazy(() => import("views/Components/pages/Achievement"));
const JenjangPendidikan = lazy(() => import("views/Components/TentangKami/JenjangPendidikan"));

//service online
const LoginPage = lazy(() => import("views/LoginPage/LoginPage.js"));
const Admission = lazy(() => import("views/Components/ServiceOnline/Pendaftaran"));
const Permission = lazy(() => import("views/Components/ServiceOnline/Perijinan"));
const PaymentInfo = lazy(() => import("views/Components/ServiceOnline/InfoPembayaran"));

//profile
const DetailProfile = "views/ProfilePage/DetailProfil";

var hist = createBrowserHistory();
const loading = (
  <React.Fragment>
    <div id="container-main">
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <br />
      Loading...
    </div>
  </React.Fragment>
)

ReactDOM.render(
  <React.Suspense fallback={loading}>
  <SnackbarProvider maxSnack={3}>
  <Router history={hist}>
    <Switch>
      <Route path="/dashboard" render={props => localStorage.getItem("token") ? <Dashboard {...props} /> : <Redirect to="/login-page"/>} />
      <Route exact path="/profile/:id" component={DetailProfile} />
      <Route exact path="/news/:id" component={DetailArticle} />
      <Route exact path="/articles" component={DetailArticle} />
      <Route exact path="/news" component={NewsPage} />
      <Route exact path="/blog" component={BlogPage} />
      <Route exact path="/galery" component={Galery} />
      <Route exact path="/login-page" component={LoginPage} />
      <Route exact path="/jenjang-pendidikan" component={JenjangPendidikan} />
      <Route exact path="/fasilitas" component={Fasilitas} />
      <Route exact path="/sejarah" component={Sejarah} />
      <Route exact path="/visimisi" component={VisiMisi} />
      <Route exact path="/sambutan" component={Sambutan} />
      <Route exact path="/achievments" component={Achievments} />
      <Route exact path="/admission" component={Admission} />
      <Route exact path="/perijinan" component={Permission} />
      <Route exact path="/pembayaran" component={PaymentInfo} />
      <Route exact path="/" component={Components} />
    </Switch>
  </Router>
  </SnackbarProvider>
  </React.Suspense>,
  document.getElementById("root")
);
