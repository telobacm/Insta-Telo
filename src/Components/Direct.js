import axios from "axios";
import { Component } from "react";
import { Container, Table } from "react-bootstrap";
import NavBar from "./NavBar";

const API_URL = process.env.REACT_APP_API_URL;
class Direct extends Component {
  constructor(props) {
    // console.log("konstruktor");
    super(props);
    this.state = {
      users: [],
    };
  }

  geni = () => {
    axios
      .get(API_URL + "/users")
      // sama aja
      // .get(`${API_URL}/users`)
      .then((res) => {
        const users = res.data;
        this.setState({ users });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    // console.log("did mon");
    this.geni();
  }

  axiosDelete = (id) => {
    // console.log(id);
    axios.delete(API_URL + "/users/" + id).then(this.geni());
  };

  render() {
    console.log(this.state);
    // console.log("dor", this.state.users);
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
                <th>Options</th>
              </tr>
            </thead>
            {this.state.users.map((item, i) => (
              <tbody key={i}>
                <tr>
                  <td width="40">{i + 1}</td>
                  <td text-align="center">{item.nama}</td>
                  <td>{item.email}</td>
                  <td>{item.alamat}</td>
                  <td>
                    <button onClick={() => this.axiosDelete(item.id)}>Delete</button>
                  </td>
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
