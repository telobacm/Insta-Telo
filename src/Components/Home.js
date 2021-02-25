import "../App.css";
import React, { Component } from "react";
import { Col, Card, Container, Row, Form, FormControl, CardImg } from "react-bootstrap";
import json from "../statham.json";
import json1 from "../statham1.json";
import json2 from "../statham2.json";
import ReadMoreReact from "read-more-react";
import NavBar from "./NavBar";

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
    } else if (
      st + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
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

class Post extends Component {
  render() {
    console.log("render post");
    return (
      <Container>
        {this.props.data.data.user.edge_web_feed_timeline.edges.map((item, i) => (
          <Card key={i} style={{ width: "25rem" }}>
            <Card.Header>
              <Card.Title>
                <img src={item.node.owner.profile_pic_url} alt="👦" />
                <b>{item.node.owner.username}</b>
              </Card.Title>
            </Card.Header>
            {/* <Card.Img variant="top" src={item.node.display_url} /> */}
            <Card.Body className="p-0">
              {
                (item.node.is_video = false ? (
                  <CardImg>
                    <img src={item.node.display_url} alt=" " width="612" />
                  </CardImg>
                ) : (
                  <video
                    controls
                    poster={item.node.display_url}
                    src={item.node.video_url}
                    type="video/mp4"
                    width="612"
                  />
                ))
              }
            </Card.Body>
            <Card.Body>
              <Card.Title>
                <b>{item.node.owner.username}</b>
              </Card.Title>
              <Card.Text>
                <b>{item.node.owner.username}</b>
                <ReadMoreReact
                  min={80}
                  ideal={100}
                  max={120}
                  readMoreText={"...selengkapnya"}
                  text={item.node.edge_media_to_caption.edges[0].node.text}
                />
              </Card.Text>
              <Card.Subtitle>{item.node.taken_at_timestamp} tahun cahaya yang lalu</Card.Subtitle>
            </Card.Body>
            <Card.Footer className="futr">
              <Form className="komen">
                <button className="emoji">
                  <img src="/emoji.svg" alt="😊" style={{ width: 30 }} />
                </button>
                <FormControl placeholder="Tambahkan Komentar..." className="emoji" />
                <button className="btn-kirim">Kirim</button>
              </Form>
            </Card.Footer>
          </Card>
        ))}
      </Container>
    );
  }
}
