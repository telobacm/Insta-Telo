import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import NavBar from "./NavBar";

class Profile extends Component {
  render() {
    return (
      <Container fluid className="mepet">
        <NavBar {...this.props} />
        <Container className="cnt-profile">
          <Row>
            <Col sm={4} style={{ paddingLeft: 80 }}>
              <button style={{ border: 0, borderRadius: 75, backgroundColor: this.props.background }}>
                <img src="/ava.png" alt="👦" style={{ width: 150 }}></img>
              </button>
            </Col>
            <Col sm={8}>
              <p>UserName</p>
              <p>0 Kiriman 100 pengikut 100 Mengikuti</p>
              <p>Nama</p>
              <p>Bio</p>
            </Col>
          </Row>
          <br />
          <hr />
        </Container>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return { background: state.background, color: state.color };
};
export default connect(mapStateToProps)(Profile);
