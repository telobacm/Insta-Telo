import "../App.css";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import json from "../statham.json";
import json1 from "../statham1.json";
import json2 from "../statham2.json";
import NavBar from "./NavBar";
import Post from "./Post";

export default class Home extends Component {
  state = {
    data: json,
    data1: json1,
    data2: json2,
    postCount1: false,
    postCount2: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.scroll);
  }

  scroll = () => {
    var st = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    if (!st) {
      this.setState({ postCount1: false });
    } else if (st + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      if (this.state.postCount1 === false) {
        this.setState({ postCount1: true });
      } else if (this.state.postCount1 === true) {
        this.setState({ postCount2: true });
      }
    }
  };

  render() {
    // console.log("render home", this.props);
    return (
      <Container fluid className="mepet">
        <NavBar {...this.props} />
        <Container style={{ paddingTop: "60px" }}>
          <Row>
            <Col sm={8}>
              <Post data={this.state.data} />
              {this.state.postCount1 === true ? <Post data={this.state.data1} /> : null}
              {this.state.postCount2 === true ? <Post data={this.state.data2} /> : null}
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
