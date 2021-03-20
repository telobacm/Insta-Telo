import axios from "axios";
import { Component } from "react";
import { Container, Table, Modal, Button, Form, FormControl } from "react-bootstrap";
import NavBar from "./NavBar";

const API_URL = process.env.REACT_APP_API_URL;
class Direct extends Component {
  /* constructor(props) {
    super(props);
    this.
  } */
  state = {
    users: [
      {
        nama: "default",
        email: "default",
        alamat: "default",
        id: "default",
      },
    ],
    open: false,
    open2: false,
    nama: "",
    email: "",
    alamat: "",
    index: 0,
    id: undefined,
  };

  geni = async () => {
    await axios.get(API_URL + "/users").then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  };
  componentDidMount() {
    this.geni();
    // console.log("Did-Mon");
    // axios.get(API_URL + "/users").then((res) => {
    //   const data = res.data;
    //   // console.log(data);
    //   // console.log(this.state.users);
    //   this.setState({ users: data });
    // });
  }

  createPost = (e) => {
    e.preventDefault();
    const { nama, email, alamat } = e.target;
    const data = {
      nama: nama.value,
      email: email.value,
      alamat: alamat.value,
    };
    //    Pemanggilan fungsi di bawah ini namanya           Referensi
    axios.post(API_URL + "/users", data).then(this.geni);
  };

  putUpdate = (e, id) => {
    e.preventDefault();
    console.log("AXIOS PUT !");
    // const { nama, email, alamat } = e.target;
    /* console.log(nama.value);
    console.log(email.value);
    console.log(alamat.value); */
    const data = {
      nama: e.target.nama.value,
      email: e.target.email.value,
      alamat: e.target.alamat.value,
      putId: 1,
    };
    //  Pemanggilan fungsi di bawah ini namanya     Eksekusi
    axios.put(API_URL + "/users/" + id, data).then(this.geni);
    this.setState({ open2: false });
  };

  bukaModal = (open) => {
    this.setState({ open });
  };

  bukaModalEdit = (param, index) => {
    this.setState({ open2: param });
    // if (param === true) {
    this.setState({ index: index });
    // } else if (param === false) {
    // this.setState({ index: undefined });
    // }
    console.log(this.state.index);
  };

  axiosDelete = (id) => {
    // console.log(id);
    axios.delete(API_URL + "/users/" + id).then(this.geni);
  };

  render() {
    const isian = this.state.users[this.state.index];
    // console.log(isian, "alamat");
    return (
      <Container fluid className="mepet">
        <NavBar {...this.props} />
        <Container style={{ paddingTop: "90px" }}>
          <p style={{ textAlign: "right" }}>
            <Button onClick={() => this.bukaModal(true)}>Tambah</Button>
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
                <FormControl type="text" defaultValue={isian !== undefined ? isian["nama"] : ""} name="nama" />
                <Form.Label>Email:</Form.Label>
                {<FormControl type="email" defaultValue={isian !== undefined ? isian["email"] : ""} name="email" />}
                <Form.Label>Alamat:</Form.Label>
                <FormControl type="text" defaultValue={isian !== undefined ? isian["alamat"] : ""} name="alamat" />
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

/////////////////////////////////////////////////////////////////////////////////////////////////////on another Component

/* <Update users={this.state.users} open2={this.state.open2} index={this.state.index} bukaModalEdit={this.state.bukaModalEdit} putUpdate={this.state.putUpdate} /> */

// class Update extends Component {
//   render() {
//     const { users, open2, index, bukaModalEdit, putUpdate } = this.props;
//     return (
//       <div>
//         <Modal show={open2} onHide={(e) => bukaModalEdit(false)} aria-label="put" size="md" centered>
//           <Form onSubmit={(e) => putUpdate(e, users[index].id)}>
//             <Modal.Header closeButton>
//               <Modal.Title id="contained-modal-title-vcenter">Edit info User</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Form.Label>Nama:</Form.Label>
//               <FormControl type="text" defaultValue={this.state.users[this.state.index].nama} name="nama" />
//               <Form.Label>Email:</Form.Label>
//               <FormControl type="text" defaultValue={this.state.users[this.state.index].email} name="email" />
//               <Form.Label>Alamat:</Form.Label>
//               <FormControl type="text" defaultValue={this.state.users[this.state.index].alamat} name="alamat" />
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="warning" type="submit">
//                 Edit
//               </Button>
//               <Button variant="secondary" onClick={() => bukaModalEdit(false)}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Form>
//         </Modal>
//       </div>
//     );
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const sleep = (delay) => {
//   return new Promise(function (resolve) {
//     setTimeout(function (e) {
//       resolve(e);
//     }, delay);
//     setTimeout(resolve, delay);
//   });
// };

// axios.interceptors.request.use(
//   async function (r) {
//     if (r.method === "put") {
//       await sleep(5000);
//     }
//     return r;
//   },
//   function (error) {
//     // Do something with response error
//     console.error(error);
//     return Promise.reject(error);
//   }
// );
// const listnama = ["joni", "jono", "jojon", "jona"];
// kirimEmail = (email) => {
//   console.log(`3 kirim email ke ${email}`);
// };

// geni = async () => {
//   console.log("get data using fetch api");
//   const res = await fetch(API_URL + "/users");
//   console.log(res);
//   const users = await res.json();
//   this.setState({ users });
// };

//   geni1 = async () => {
//     const get1 = await axios.get(API_URL + "/users");
//     console.log("old", get1.data[0].nama);
//     this.setState({ users: get1.data });

//     const payload = { nama: listnama[Math.floor(Math.random() * listnama.length)] };
//     console.log("new", payload.nama);
//     const update = axios.put(API_URL + "/users/" + get1.data[0].id, payload);
//     axios.put(API_URL + "/users/" + get1.data[0].id, payload).then(async () => {
//       await timeout(2000);
//       console.log("1 update data");
//     });
//     console.log(update);

//     const get2 = await axios.get(API_URL + "/users");
//     console.log("final", get2.data[0].nama);
//     this.setState({ users: get2.data });

//     show("1 update data", 2000);
//     await show("2 ganti nama", 1000);
//     this.kirimEmail("joni@mail.com");
//   };

//    //CALLBACK HELL
//   geni2 = () => {
//     axios
//       .get(API_URL + "/users")
//       // sama aja
//       // .get(`${API_URL}/users`)
//       .then((res) => {
//         this.setState({ users: res.data });
//         const payload = { nama: listnama[Math.floor(Math.random() * listnama.length)] };
//         axios.put(API_URL + "/users/" + res.data[0].id, payload).then((res2) => {
//           axios.get(API_URL + "/users").then((res3) => {
//             console.log(res3.data[0].nama);
//             setTimeout(() => {
//               this.setState({ users: res3.data });
//             }, 3000);
//           });
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
