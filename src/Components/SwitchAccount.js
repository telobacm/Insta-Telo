import React, { Component } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";

class SwitchAccount extends Component {
  render() {
    return (
      <Container fluid className="mepet">
        <NavBar {...this.props} />
        <Container style={{ paddingTop: "150px" }}>
          <h1>IKI SWITCH ACCOUNT</h1>
        </Container>
      </Container>
    );
  }
}
export default SwitchAccount;
