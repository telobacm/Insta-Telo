import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MenuCol extends Component {
  render() {
    console.log(this.props);
    const pathname = this.props.location.pathname;
    return (
      <nav className="option">
        <li>
          <Link
            to="/accounts/edit/"
            className={`nav-link ${pathname === "/accounts/edit" ? "active" : "inactive"}`}
          >
            Edit Profil
          </Link>
        </li>
        <li>
          <Link
            to="/accounts/password/change/"
            className={`nav-link ${
              pathname === "/accounts/password/change" ? "active" : "inactive"
            }`}
          >
            Ubah Kata Sandi
          </Link>
        </li>
        <li>
          <Link
            to="/accounts/manage_access/"
            className={`nav-link ${pathname === "/accounts/manage_access" ? "active" : "inactive"}`}
          >
            Aplikasi dan Situs Web
          </Link>
        </li>
        <li>
          <Link
            to="/emails/settings/"
            className={`nav-link ${pathname === "/emails/settings" ? "active" : "inactive"}`}
          >
            Email dan SMS
          </Link>
        </li>
        <li>
          <Link
            to="/push/web/settings/"
            className={`nav-link ${pathname === "/push/web/settings" ? "active" : "inactive"}`}
          >
            Notifikasi Otomatis
          </Link>
        </li>
        <li>
          <Link
            to="/accounts/contact_history/"
            className={`nav-link ${
              pathname === "/accounts/contact_history" ? "active" : "inactive"
            }`}
          >
            Kelola Kontak
          </Link>
        </li>
        <li>
          <Link
            to="/accounts/privacy_and_security/"
            className={`nav-link ${
              pathname === "/accounts/privacy_and_security" ? "active" : "inactive"
            }`}
          >
            Privasi dan Keamanan
          </Link>
        </li>
        <li>
          <Link
            to="/session/login_activity/"
            className={`nav-link ${pathname === "/session/login_activity" ? "active" : "inactive"}`}
          >
            Aktivitas Login
          </Link>
        </li>
        <li>
          <Link
            to="/emails/emails_sent/"
            className={`nav-link ${pathname === "/emails/emails_sent" ? "active" : "inactive"}`}
          >
            Email dari Instagram
          </Link>
        </li>
      </nav>
    );
  }
}
