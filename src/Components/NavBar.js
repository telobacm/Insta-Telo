import React, { Component } from "react";
import "../App.css";
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    // console.log("navbar", this.props);
    const pathname = this.props.location.pathname;
    return (
      <Container fluid className="fikset">
        <Row className="header">
          <Container>
            <Navbar className="instatelo">
              <Col md="4">
                <Navbar.Brand>
                  <Link to="/">
                    <img src="/InstaTelo.jpg" alt="𝕴𝖓𝖘𝖙𝖆𝖙𝖊𝖑𝖔"></img>
                  </Link>
                </Navbar.Brand>
              </Col>
              <Col md="4">
                <Form className="form-src">
                  <FormControl className="search" type="text" placeholder="Search" />
                </Form>
              </Col>
              <Col md="4">
                <Nav className="kanan">
                  <Link to="/">
                    <img
                      className="ikon"
                      src={pathname === "/" ? "/home-act.svg" : "/home.svg"}
                      alt="🏠"
                    />
                  </Link>
                  <Link to="/direct/">
                    <img
                      className="ikon"
                      src={pathname === "/direct/" ? "/dm-act.svg" : "/dm.svg"}
                      alt="📩"
                    />
                  </Link>
                  <Link to="/explore/">
                    <img
                      className="ikon"
                      src={pathname === "/explore/" ? "/explore-act.svg" : "/explore.svg"}
                      alt="🧭"
                    />
                  </Link>
                  <Link to="/activity/">
                    <img
                      className="ikon"
                      src={pathname === "/activity/" ? "/heart-act.svg" : "/heart.svg"}
                      alt="💝"
                    />
                  </Link>
                  <NavDropdown
                    title={<img src="/pp.jpg" alt="👦" className="ikon" />}
                    id="basic-nav-dropdown"
                  >
                    <Link to="/profile/">
                      <img src="/user.svg" alt="👦" style={{ width: 22 }} /> Profil
                    </Link>
                    <Link to="/bookmark/">
                      <img src="/bookmark.svg" alt="🔖" style={{ width: 22 }} /> Disimpan
                    </Link>
                    <Link to="/accounts/edit/">
                      <img src="/settings.svg" alt="⚙️" style={{ width: 22 }} /> Pengaturan
                    </Link>
                    <Link to="/switch_account/">
                      <img src="/switch.svg" alt="🔄" style={{ width: 22 }} /> Ganti Akun
                    </Link>
                    <NavDropdown.Divider />
                    <Link to="/log_out/">Keluar</Link>
                  </NavDropdown>
                </Nav>
              </Col>
            </Navbar>
          </Container>
        </Row>
      </Container>
    );
  }
}
