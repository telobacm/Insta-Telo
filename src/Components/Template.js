import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MenuCol from "./MenuCol";

export default class Template extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="options">
          <Col md={3} className="tabs">
            <MenuCol {...this.props} />
          </Col>
          <Col md={9} className="tabs">
            {this.props.children}
          </Col>
        </Row>
      </Container>
    );
  }
}
