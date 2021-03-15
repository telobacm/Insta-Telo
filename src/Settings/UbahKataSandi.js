import React, { Component } from "react";
import { Row, Col, Form, Button, Image } from "react-bootstrap";
import { connect } from "react-redux";
import Template from "../Components/Template";

class UbahKataSandi extends Component {
  render() {
    return (
      <Template {...this.props}>
        <div>
          <Row style={{ paddingTop: 30 }}>
            <Col className="isikiri" md="3">
              <Image src="/ava.png" alt="👦" style={{ width: 38 }} />
            </Col>
            <Col md="9">
              <p className="nama-akun2">Nama Akun</p>
            </Col>
          </Row>
          <Row>
            <Col className="isikiri" md="3">
              Kata Sandi Lama
            </Col>
            <Col md="9">
              <Form.Control style={{ backgroundColor: this.props.background }} type="password" className="form-pass" />
            </Col>
          </Row>
          <Row>
            <Col className="isikiri" md="3">
              Kata Sandi Baru
            </Col>
            <Col md="9">
              <Form.Control style={{ backgroundColor: this.props.background }} type="password" className="form-pass" />
            </Col>
          </Row>
          <Row>
            <Col className="isikiri" md="3">
              Konfirmasi Kata Sandi Baru
            </Col>
            <Col md="9">
              <Form.Control style={{ backgroundColor: this.props.background }} type="password" className="form-pass" />
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 9, offset: 3 }}>
              <Button className="btn-kirim" type="submit" value="Submit">
                Ubah Kata Sandi
              </Button>
            </Col>
            <Col md={{ span: 9, offset: 3 }}>
              <button style={{ backgroundColor: this.props.background }} className="btn-non" type="submit" value="Submit">
                Lupa Kata Sandi ?
              </button>
            </Col>
          </Row>
        </div>
      </Template>
    );
  }
}

const mapStateToProps = (state) => {
  return { background: state.background, color: state.color };
};
export default connect(mapStateToProps)(UbahKataSandi);
