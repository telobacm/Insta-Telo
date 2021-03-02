import React, { Component } from "react";
import Template from "../Components/Template";

class EmailIG extends Component {
  render() {
    return (
      <Template {...this.props}>
        <div className="col-pad">
          <p className="head-setting">Email Dari Instagram</p>
        </div>
      </Template>
    );
  }
}
export default EmailIG;
