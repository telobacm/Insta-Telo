import axios from "axios";
import { Component } from "react";
import { Container, Table, Modal, Button, Form, FormControl } from "react-bootstrap";
import NavBar from "./NavBar";

const API_URL = process.env.REACT_APP_API_URL;
class Direct extends Component {
  state = {
    users: [],
    open: false,
    open2: false,
    nama: "",
    email: "",
    alamat: "",
    index: 0,
    id: undefined,
  };

  geni = async () => {
    await axios.get(API_URL).then((res) => {
      // console.log("oy oy oy", res.data);
      this.setState({ users: res.data });
    });
  };
  componentDidMount() {
    // this.geni();
    console.log("did mon");
    axios.get(API_URL).then((res) => {
      this.setState({ users: res.data });
    });
  }

  createPost = (e) => {
    e.preventDefault();
    const { nama, email, alamat, id } = e.target;
    const data = {
      nama: nama.value,
      email: email.value,
      alamat: alamat.value,
      id: id.value,
    };
    axios.post(API_URL, data).then(this.geni);
  };

  putUpdate = (e, id) => {
    e.preventDefault();
    // console.log("AXIOS PUT !");
    const data = {
      nama: e.target.nama.value,
      email: e.target.email.value,
      alamat: e.target.alamat.value,
    };
    axios.put(API_URL + "/" + id, data).then(this.geni);
    this.setState({ open2: false });
  };

  axiosDelete = (id) => {
    // console.log(id);
    axios.delete(API_URL + "/" + id).then(this.geni);
  };

  bukaModal = (open) => {
    this.setState({ open });
  };

  bukaModalEdit = (param, index) => {
    this.setState({ open2: param });
    this.setState({ index: index });
  };

  render() {
    const isian = this.state.users[this.state.index];
    // console.log(this.state.users);
    return (
      <Container fluid className="mepet">
        <NavBar {...this.props} />
        <Container style={{ paddingTop: "90px" }}>
          <p style={{ textAlign: "right" }}>
            <Button onClick={(e) => this.bukaModal(true)}>Tambah</Button>
            <br />
            <i>*klik untuk menambahkan user</i>
          </p>
          <i>*Klik pada baris tabel untuk mengedit</i>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Alamat</th>
                <th>id</th>
                <th>Options</th>
              </tr>
            </thead>
            {this.state.users.map((item, i) => (
              <tbody key={i}>
                <tr>
                  <td width="40" style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {i + 1}
                  </td>
                  <td style={{ verticalAlign: "middle" }} onClick={() => this.bukaModalEdit(true, i)}>
                    {item.nama}
                  </td>
                  <td style={{ verticalAlign: "middle" }} onClick={() => this.bukaModalEdit(true, i)}>
                    {item.email}
                  </td>
                  <td style={{ verticalAlign: "middle" }} onClick={() => this.bukaModalEdit(true, i)}>
                    {item.alamat}
                  </td>
                  <td style={{ verticalAlign: "middle" }} onClick={() => this.bukaModalEdit(true, i)}>
                    {item.id}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <Button variant="danger" onClick={() => this.axiosDelete(item.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
          <Modal aria-label="POST" size="md" show={this.state.open} centered>
            <Form onSubmit={this.createPost}>
              <Modal.Header closeButton onClick={() => this.bukaModal(false)}>
                <Modal.Title id="contained-modal-title-vcenter">Masukkan user baru</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Label>Nama:</Form.Label>
                <FormControl type="text" name="nama" />
                <Form.Label>Email:</Form.Label>
                <FormControl type="text" name="email" />
                <Form.Label>Alamat:</Form.Label>
                <FormControl type="text" name="alamat" />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" type="submit" onClick={() => this.bukaModal(false)}>
                  Create
                </Button>
                <Button variant="secondary" onClick={() => this.bukaModal(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
          <Modal aria-label="PUT" show={this.state.open2} onHide={() => this.bukaModalEdit(false, this.state.index)} size="md" centered>
            <Form onSubmit={(e) => this.putUpdate(e, this.state.users[this.state.index].id)}>
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Edit info User</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Label>No.</Form.Label>
                <FormControl defaultValue={this.state.index + 1} disabled />
                <Form.Label>Nama:</Form.Label>
                <FormControl type="text" defaultValue={isian !== undefined ? isian.nama : ""} name="nama" />
                <Form.Label>Email:</Form.Label>
                <FormControl type="email" defaultValue={isian !== undefined ? isian.email : ""} name="email" />
                <Form.Label>Alamat:</Form.Label>
                <FormControl type="text" defaultValue={isian !== undefined ? isian.alamat : ""} name="alamat" />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="warning" type="submit">
                  Edit
                </Button>
                <Button variant="secondary" onClick={() => this.bukaModalEdit(false)}>
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
