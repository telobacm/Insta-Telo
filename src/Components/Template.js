import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MenuCol from "./MenuCol";
import NavBar from "./NavBar";

export default class Template extends Component {
  render() {
    return (
      <Container fluid className="mepet">
        <NavBar {...this.props} />
        <Container style={{ paddingTop: "50px" }}>
          <Row className="options">
            <Col md={3} className="tabs">
              <MenuCol {...this.props} />
            </Col>
            <Col md={9} className="tabs">
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
