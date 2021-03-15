import "../App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Container, Form, FormControl, CardImg } from "react-bootstrap";
import ReadMoreReact from "read-more-react";

class Post extends Component {
  render() {
    // console.log("render post");
    return (
      <Container>
        {this.props.data.data.user.edge_web_feed_timeline.edges.map((item, i) => (
          <Card key={i} style={{ width: "25rem" }}>
            <Card.Header style={{ backgroundColor: this.props.background }}>
              <Card.Title>
                <img src={item.node.owner.profile_pic_url} alt="👦" />
                <b>{item.node.owner.username}</b>
              </Card.Title>
            </Card.Header>
            {/* <Card.Img variant="top" src={item.node.display_url} /> KALO CUMA PEN GAMBAR THOK*/}
            <Card.Body style={{ backgroundColor: this.props.background }} className="p-0">
              {
                (item.node.is_video = false ? (
                  <CardImg>
                    <img src={item.node.display_url} alt=" " width="612" />
                  </CardImg>
                ) : (
                  <video controls poster={item.node.display_url} src={item.node.video_url} type="video/mp4" width="612" />
                ))
              }
            </Card.Body>
            <Card.Body style={{ backgroundColor: this.props.background }}>
              <Card.Title>
                <b>{item.node.owner.username}</b>
              </Card.Title>
              <Card.Text>
                <b>{item.node.owner.username}</b>
                <ReadMoreReact min={80} ideal={100} max={120} readMoreText={"...selengkapnya"} text={item.node.edge_media_to_caption.edges[0].node.text} />
              </Card.Text>
              <Card.Subtitle>{item.node.taken_at_timestamp} tahun cahaya yang lalu</Card.Subtitle>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: this.props.background }} className="futr">
              <Form className="komen">
                <button style={{ backgroundColor: this.props.background }} className="emoji">
                  <img src="/emoji.svg" alt="😊" style={{ width: 30 }} />
                </button>
                <FormControl style={{ backgroundColor: this.props.background }} placeholder="Tambahkan Komentar..." className="emoji" />
                <button style={{ backgroundColor: this.props.background }} className="btn-komen-post">
                  Kirim
                </button>
              </Form>
            </Card.Footer>
          </Card>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { background: state.background, color: state.color };
};
export default connect(mapStateToProps)(Post);
