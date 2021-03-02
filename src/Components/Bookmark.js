import { Component } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";

class Bookmark extends Component {
  render() {
    return (
      <Container fluid className="mepet">
        <NavBar {...this.props} />
        <Container style={{ paddingTop: "150px" }}>
          <h1>IKI BOOKMARK</h1>
        </Container>
      </Container>
    );
  }
}
export default Bookmark