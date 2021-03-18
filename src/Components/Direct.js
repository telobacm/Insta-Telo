import axios from "axios";
import { Component } from "react";
import { Container, Table, Modal, Button, Form, FormControl } from "react-bootstrap";
import NavBar from "./NavBar";

const API_URL = process.env.REACT_APP_API_URL;
class Direct extends Component {
  constructor(props) {
    // console.log("konstruktor");
    super(props);
    this.state = {
      users: [],
      open: false,
      nama: "",
      email: "",
      alamat: "",
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
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post(API_URL + "/users", this.state).then(this.geni());
  };

  toggleModal = (open) => {
    this.setState({ open });
  };

  componentDidMount() {
    // console.log("Did-Mon");
    this.geni();
  }

  axiosDelete = (id) => {
    // console.log(id);
    axios.delete(API_URL + "/users/" + id).then(this.geni());
  };

  render() {
    return (
      <Container fluid className="mepet">
        <NavBar {...this.props} />
        <Container style={{ paddingTop: "90px" }}>
          <p style={{ textAlign: "right" }}>
            <Button onClick={() => this.toggleModal(true)}>Tambah</Button>
            <br />
            <i>*klik untuk menambahkan user</i>
          </p>
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
                  <td width="40" style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {i + 1}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>{item.nama}</td>
                  <td style={{ verticalAlign: "middle" }}>{item.email}</td>
                  <td style={{ verticalAlign: "middle" }}>{item.alamat}</td>
                  <td style={{ textAlign: "center" }}>
                    <Button variant="danger" onClick={() => this.axiosDelete(item.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
          <Modal size="md" show={this.state.open} centered>
            <Form onSubmit={this.handleSubmit}>
              <Modal.Header closeButton onClick={() => this.toggleModal(false)}>
                <Modal.Title id="contained-modal-title-vcenter">Masukkan user baru</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group>
                  <Form.Label>Nama:</Form.Label>
                  <FormControl onChange={this.handleChange} type="text" name="nama" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email:</Form.Label>
                  <FormControl onChange={this.handleChange} type="text" name="email" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Alamat:</Form.Label>
                  <FormControl onChange={this.handleChange} type="text" name="alamat" />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" type="submit" onClick={() => this.toggleModal(false)}>
                  Create
                </Button>
                <Button variant="secondary" onClick={() => this.toggleModal(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </Container>
      </Container>
    );
  }
}

export default Direct;
