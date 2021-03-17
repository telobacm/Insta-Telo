import axios from "axios";
import { Component } from "react";
import { Container, Table } from "react-bootstrap";
import NavBar from "./NavBar";

const API_URL = process.env.REACT_APP_API_URL;
class Direct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "/users")
      .then((res) => {
        const users = res.data;
        this.setState({ users });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log("dor", this.state.users);
    return (
      <Container fluid className="mepet">
        <NavBar {...this.props} />
        <Container style={{ paddingTop: "150px" }}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Alamat</th>
              </tr>
            </thead>
            {this.state.users.map((item, i) => (
              <tbody key={i}>
                <tr>
                  <td width="40">{i + 1}</td>
                  <td text-align="center">{item.nama}</td>
                  <td>{item.email}</td>
                  <td>{item.alamat}</td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Container>
      </Container>
    );
  }
}

export default Direct;
