import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import MenuCol from "./MenuCol";
import NavBar from "./NavBar";

class Template extends Component {
  render() {
    return (
      <Container fluid className="mepet">
        <NavBar {...this.props} />
        <Container style={{ paddingTop: "50px" }}>
          <Row style={{ background: this.props.background, color: this.props.color }} className="options">
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

const mapStateToProps = (state) => {
  return { background: state.background, color: state.color };
};
export default connect(mapStateToProps)(Template);
