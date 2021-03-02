import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Template from "../Components/Template";

class EditProfil extends Component {
  state = {
    EditProfil: JSON.parse(localStorage.getItem("EditProfil")) || {
      nama: "",
      namaPengguna: "Nama Pengguna",
      situsWeb: "",
      bio: "",
      email: "",
      telepon: "",
      kelamin: "",
      saran: true,
    },
  };
  componentDidUpdate() {
    localStorage.setItem("EditProfil", JSON.stringify(this.state.EditProfil));
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      EditProfil: {
        nama: e.target.nama.value,
        namaPengguna: e.target.namaPengguna.value,
        situsWeb: e.target.situsWeb.value,
        bio: e.target.bio.value,
        email: e.target.email.value,
        telepon: e.target.telepon.value,
        kelamin: e.target.kelamin.value,
        saran: e.target.saran.value,
      },
    });
  };
  render() {
    console.log("edit-profile", this.props);
    return (
      <Template {...this.props}>
        <div>
          <Form onSubmit={(e) => this.onSubmit(e)}>
            <Row style={{ paddingTop: 30 }}>
              <Col className="isikiri" md="3">
                <img src="/pp.jpg" alt="👦" style={{ width: 38 }} />
              </Col>
              <Col md="9">
                <p className="nama-akun">{this.state.EditProfil.namaPengguna}</p>
                <a className="ubah-pp" href=" ">
                  Ubah Foto Profil
                </a>
              </Col>
            </Row>
            <Row>
              <Col className="isikiri" md="3">
                Nama
              </Col>
              <Col md="9">
                <Form.Control id="nama" defaultValue={this.state.EditProfil.nama} type="text" className="form-ctrl" placeholder="Nama" />
                <Form.Text className="ket-form">
                  Bantu orang menemukan akun Anda menggunakan nama yang orang-orang kenali tentang Anda: baik nama lengkap, nama panggilan, atau nama bisnis Anda.
                  <br />
                  <br /> Anda hanya bisa mengubah nama grup Anda dua kali dalam waktu 14 hari.
                </Form.Text>
              </Col>
            </Row>
            <Row>
              <Col className="isikiri" md="3">
                Nama Pengguna
              </Col>
              <Col md="9">
                <Form.Control id="namaPengguna" defaultValue={this.state.EditProfil.namaPengguna} onChange={this.changeUserName} type="text" className="form-ctrl" placeholder="Nama Pengguna" />
                <Form.Text className="ket-form">
                  Di sebagian besar kasus, Anda tidak akan bisa mengubah nama pengguna kembali menjadi {this.state.userName} untuk 14 hari lain.
                  <br /> <a href="https://help.instagram.com/876876079327341">Pelajari selengkapnya</a>
                </Form.Text>
              </Col>
            </Row>
            <Row>
              <Col className="isikiri" md="3">
                Situs Web
              </Col>
              <Col md="9">
                <Form.Control id="situsWeb" defaultValue={this.state.EditProfil.situsWeb} type="text" className="form-ctrl" placeholder="Situs Web" />
              </Col>
            </Row>
            <Row>
              <Col className="isikiri" md="3">
                Bio
              </Col>
              <Col md="9">
                <Form.Control id="bio" defaultValue={this.state.EditProfil.bio} as="textarea" rows={2} type="text" className="text-area" placeholder="Miwon" />
                <Form.Text className="ket-form">
                  <br />
                  <p className="info-pri">Informasi Pribadi</p>
                  Berikan informasi pribadi Anda, bahkan jika akun digunakan untuk bisnis, hewan peliharaan, atau hal lainnya. Ini tidak akan menjadi bagian profil publik Anda.
                </Form.Text>
              </Col>
            </Row>
            <Row>
              <Col className="isikiri" md="3">
                Email
              </Col>
              <Col md="9">
                <Form.Control id="email" type="email" className="form-ctrl" placeholder="Email" />
              </Col>
            </Row>
            <Row>
              <Col className="isikiri" md="3">
                Nomor Telepon
              </Col>
              <Col md="9">
                <Form.Control id="telepon" defaultValue={this.state.EditProfil.telepon} type="text" className="form-ctrl" placeholder="Nomor Telepon" />
              </Col>
            </Row>
            <Row>
              <Col className="isikiri" md="3">
                Jenis Kelamin
              </Col>
              <Col md="9">
                <Form.Control id="kelamin" defaultValue={this.state.EditProfil.kelamin} type="text" className="form-ctrl" placeholder="Jenis Kelamin" />
              </Col>
            </Row>
            <Row>
              <Col className="isikiri" md="3">
                Saran Akun
                <br />
                Serupa
              </Col>
              <Col>
                <Form.Group id="formGridCheckbox" className="chk-box">
                  <Form.Check
                    id="saran"
                    defaultChecked={this.state.EditProfil.saran}
                    type="checkbox"
                    value="ojo kakean hpnan"
                    label="Cantumkan akun Anda saat menyarankan akun serupa yang mungkin ingin diikuti oleh orang-orang. [?]"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 3, offset: 3 }}>
                <Button className="btn-kirim" type="submit">
                  Kirim
                </Button>
              </Col>
              <Col md="6">
                <button className="btn-non">Nonaktifkan sementara akun saya</button>
              </Col>
            </Row>
          </Form>
        </div>
      </Template>
    );
  }
}

export default EditProfil;
