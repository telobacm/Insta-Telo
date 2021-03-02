import React, { Component } from "react";
import Template from "../Components/Template";

class AktivitasLogin extends Component {
  render() {
    return (
      <Template {...this.props}>
        <div className="col-pad">
          <p className="head-setting">Aktivitas Login</p>
          <p className="bold-txt">Ini Anda?</p>
          <p className="bold-txt">Tempat Anda Login</p>
        </div>
      </Template>
    );
  }
}
export default AktivitasLogin;
