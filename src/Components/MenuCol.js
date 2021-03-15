import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class MenuCol extends Component {
  render() {
    // console.log(this.props);
    const pathname = this.props.location.pathname;
    return (
      <nav style={{ background: this.props.background }} className="option">
        <li>
          <Link style={{ color: this.props.color }} to="/accounts/edit/" className={`nav-link ${pathname === "/accounts/edit/" ? "active" : "inactive"}`}>
            Edit Profil
          </Link>
        </li>
        <li>
          <Link style={{ color: this.props.color }} to="/accounts/password/change/" className={`nav-link ${pathname === "/accounts/password/change/" ? "active" : "inactive"}`}>
            Ubah Kata Sandi
          </Link>
        </li>
        <li>
          <Link style={{ color: this.props.color }} to="/accounts/manage_access/" className={`nav-link ${pathname === "/accounts/manage_access/" ? "active" : "inactive"}`}>
            Aplikasi dan Situs Web
          </Link>
        </li>
        <li>
          <Link style={{ color: this.props.color }} to="/emails/settings/" className={`nav-link ${pathname === "/emails/settings/" ? "active" : "inactive"}`}>
            Email dan SMS
          </Link>
        </li>
        <li>
          <Link style={{ color: this.props.color }} to="/push/web/settings/" className={`nav-link ${pathname === "/push/web/settings/" ? "active" : "inactive"}`}>
            Notifikasi Otomatis
          </Link>
        </li>
        <li>
          <Link style={{ color: this.props.color }} to="/accounts/contact_history/" className={`nav-link ${pathname === "/accounts/contact_history/" ? "active" : "inactive"}`}>
            Kelola Kontak
          </Link>
        </li>
        <li>
          <Link style={{ color: this.props.color }} to="/accounts/privacy_and_security/" className={`nav-link ${pathname === "/accounts/privacy_and_security/" ? "active" : "inactive"}`}>
            Privasi dan Keamanan
          </Link>
        </li>
        <li>
          <Link style={{ color: this.props.color }} to="/session/login_activity/" className={`nav-link ${pathname === "/session/login_activity/" ? "active" : "inactive"}`}>
            Aktivitas Login
          </Link>
        </li>
        <li>
          <Link style={{ color: this.props.color }} to="/emails/emails_sent/" className={`nav-link ${pathname === "/emails/emails_sent/" ? "active" : "inactive"}`}>
            Email dari Instagram
          </Link>
        </li>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return { background: state.background, color: state.color };
};
export default connect(mapStateToProps)(MenuCol);
