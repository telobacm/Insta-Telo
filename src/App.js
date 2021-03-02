import "./App.css";
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Direct from "./Components/Direct";
import Explore from "./Components/Explore";
import Activity from "./Components/Activity";
import Profile from "./Components/Profile";
import Bookmark from "./Components/Bookmark";
import SwitchAccount from "./Components/SwitchAccount";
import LogOut from "./Components/LogOut";
import EditProfil from "./Settings/EditProfil";
import UbahKataSandi from "./Settings/UbahKataSandi";
import AplikasidanSitus from "./Settings/AplikasidanSitus";
import EmaildanSMS from "./Settings/EmaildanSMS";
import NotifikasiOtomatis from "./Settings/NotifikasiOtomatis";
import KelolaKontak from "./Settings/KelolaKontak";
import PrivasiKeamanan from "./Settings/PrivasiKemanan";
import AktivitasLogin from "./Settings/AktivitasLogin";
import EmailIG from "./Settings/EmailIG";

export default class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Container fluid>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/direct/" component={Direct} />
            <Route path="/explore/" component={Explore} />
            <Route path="/activity/" component={Activity} />
            <Route path="/profile/" component={Profile} />
            <Route path="/bookmark/" component={Bookmark} />
            <Route path="/switch_account/" component={SwitchAccount} />
            <Route path="/log_out/" component={LogOut} />
            <Route path="/accounts/edit/" component={EditProfil} />
            <Route path="/accounts/password/change/" component={UbahKataSandi} />
            <Route path="/accounts/manage_access/" component={AplikasidanSitus} />
            <Route path="/emails/settings/" component={EmaildanSMS} />
            <Route path="/push/web/settings/" component={NotifikasiOtomatis} />
            <Route path="/accounts/contact_history/" component={KelolaKontak} />
            <Route path="/accounts/privacy_and_security/" component={PrivasiKeamanan} />
            <Route path="/session/login_activity/" component={AktivitasLogin} />
            <Route path="/emails/emails_sent/" component={EmailIG} />
          </Switch>
        </Container>
      </Router>
    );
  }
}
