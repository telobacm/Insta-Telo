import "./App.css";
import React, { Component } from "react";
import { Container, Row, Form, Col, Tab, Tabs, Image, Button } from "react-bootstrap";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import Template from "./Components/Template";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

export default class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Container fluid>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/direct/" component={Direct} />
            <Route path="/explore/" component={Explore} />
            <Route path="/activity/" component={Activity} />
            <Route path="/profile/" component={Profile} />
            <Route path="/bookmark/" component={Bookmark} />
            <Route path="/accounts/edit/" component={EditProfil} />
            <Route path="/switch_account/" component={SwitchAccount} />
            <Route path="/log_out/" component={logOut} />
            <Route path="/accounts/edit/" component={EditProfil} />
            <Route path="/accounts/password/change/" component={UbahKataSandi} />
            <Route path="/accounts/manage_access/" component={AplikasidanSitus} />
            <Route path="/emails/settings/" component={EmaildanSMS} />
            <Route path="/push/web/settings/" component={NotifikasiOtomatis} />
            <Route path="/accounts/contact_history/" component={KelolaKontak} />
            <Route path="/accounts/privacy_and_security/" component={PrivasiKeamanan} />
            <Route path="/session/login_activity/" component={AktivitasLogin} />
            <Route path="/emails/emails_sent/" component={EmailIG} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

class Direct extends Component {
  render() {
    return (
      <Container fluid className="mepet">
        <NavBar {...this.props} />
        <Container style={{ paddingTop: "150px" }}>
          <h1>IKI DM</h1>
        </Container>
      </Container>
    );
  }
}

class Explore extends Component {
  render() {
    return (
      <Container fluid className="mepet">
        <NavBar {...this.props} />
        <Container style={{ paddingTop: "150px" }}>
          <h1>IKI EXPLORE</h1>
        </Container>
      </Container>
    );
  }
}

class Activity extends Component {
  render() {
    return (
      <Container fluid className="mepet">
        <NavBar {...this.props} />
        <Container style={{ paddingTop: "150px" }}>
          <h1>IKI ACTIVITY</h1>
        </Container>
      </Container>
    );
  }
}

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

class Profile extends Component {
  render() {
    return (
      <Container fluid className="mepet">
        <NavBar {...this.props} />
        <Container style={{ paddingTop: "150px" }}>
          <h1>IKI PROFILE</h1>
        </Container>
      </Container>
    );
  }
}

class SwitchAccount extends Component {
  render() {
    return (
      <Container fluid className="mepet">
        <NavBar {...this.props} />
        <Container style={{ paddingTop: "150px" }}>
          <h1>IKI SWITCH ACCOUNT</h1>
        </Container>
      </Container>
    );
  }
}

class logOut extends Component {
  render() {
    return (
      <Container fluid className="mepet">
        <NavBar {...this.props} />
        <Container style={{ paddingTop: "150px" }}>
          <h1>IKI LOG OUT</h1>
        </Container>
      </Container>
    );
  }
}

class EditProfil extends Component {
  render() {
    console.log("edit-profile", this.props);
    return (
      <Template {...this.props}>
        <div>
          <Row className="col-pad">
            <Col className="isikiri" md="3">
              <img src="/pp.jpg" alt="👦" style={{ width: 38 }} />
            </Col>
            <Col md="9">
              <p className="nama-akun">Nama Akun</p>
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
              <Form.Control type="text" className="form-ctrl" placeholder="Nama" />
              <Form.Text className="ket-form">
                Bantu orang menemukan akun Anda menggunakan nama yang orang-orang kenali tentang
                Anda: baik nama lengkap, nama panggilan, atau nama bisnis Anda.
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
              <Form.Control type="text" className="form-ctrl" placeholder="Nama Pengguna" />
              <Form.Text className="ket-form">
                Di sebagian besar kasus, Anda tidak akan bisa mengubah nama pengguna kembali menjadi
                "this.yang-di-form" untuk 14 hari lain.
                <br />{" "}
                <a href="https://help.instagram.com/876876079327341">Pelajari selengkapnya</a>
              </Form.Text>
            </Col>
          </Row>
          <Row>
            <Col className="isikiri" md="3">
              Situs Web
            </Col>
            <Col md="9">
              <Form.Control type="text" className="form-ctrl" placeholder="Situs Web" />
            </Col>
          </Row>
          <Row>
            <Col className="isikiri" md="3">
              Bio
            </Col>
            <Col md="9">
              <Form.Control
                as="textarea"
                rows={2}
                type="text"
                className="text-area"
                placeholder="Miwon"
              />
              <Form.Text className="ket-form">
                <br />
                <p className="info-pri">Informasi Pribadi</p>
                Berikan informasi pribadi Anda, bahkan jika akun digunakan untuk bisnis, hewan
                peliharaan, atau hal lainnya. Ini tidak akan menjadi bagian profil publik Anda.
              </Form.Text>
            </Col>
          </Row>
          <Row>
            <Col className="isikiri" md="3">
              Email
            </Col>
            <Col md="9">
              <Form.Control type="email" className="form-ctrl" placeholder="Email" />
            </Col>
          </Row>
          <Row>
            <Col className="isikiri" md="3">
              Nomor Telepon
            </Col>
            <Col md="9">
              <Form.Control type="text" className="form-ctrl" placeholder="Nomor Telepon" />
            </Col>
          </Row>
          <Row>
            <Col className="isikiri" md="3">
              Saran Akun
              <br />
              Serupa
            </Col>
            <Col>
              <Form.Group className="chk-box">
                <Form.Check
                  type="checkbox"
                  label="Cantumkan akun Anda saat menyarankan akun serupa yang mungkin ingin diikuti oleh orang-orang. [?]"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 3, offset: 3 }}>
              <Button className="btn-kirim" type="submit" value="Submit">
                Kirim
              </Button>
            </Col>
            <Col md="6">
              <button className="btn-non" type="submit" value="Submit">
                Nonaktifkan sementara akun saya
              </button>
            </Col>
          </Row>
        </div>
      </Template>
    );
  }
}

class UbahKataSandi extends Component {
  render() {
    return (
      <Template {...this.props}>
        <div>
          <Row className="col-pad">
            <Col className="isikiri" md="3">
              <Image src="/pp.jpg" alt="👦" style={{ width: 38 }} />
            </Col>
            <Col md="9">
              <p className="nama-akun2">Nama Akun</p>
            </Col>
          </Row>
          <Row>
            <Col className="isikiri" md="3">
              Kata Sandi Lama
            </Col>
            <Col md="9">
              <Form.Control type="password" className="form-pass" />
            </Col>
          </Row>
          <Row>
            <Col className="isikiri" md="3">
              Kata Sandi Baru
            </Col>
            <Col md="9">
              <Form.Control type="password" className="form-pass" />
            </Col>
          </Row>
          <Row>
            <Col className="isikiri" md="3">
              Konfirmasi Kata Sandi Baru
            </Col>
            <Col md="9">
              <Form.Control type="password" className="form-pass" />
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 9, offset: 3 }}>
              <Button className="btn-kirim" type="submit" value="Submit">
                Ubah Kata Sandi
              </Button>
            </Col>
            <Col md={{ span: 9, offset: 3 }}>
              <button className="btn-non" type="submit" value="Submit">
                Lupa Kata Sandi ?
              </button>
            </Col>
          </Row>
        </div>
      </Template>
    );
  }
}

class AplikasidanSitus extends Component {
  render() {
    return (
      <Template {...this.props}>
        <div>
          <h2 className="app-site-web">Aplikasi dan Situs Web</h2>
          <Tabs
            className="tabs-app"
            defaultActiveKey="aktif"
            transition={false}
            id="noanim-tab-example"
          >
            <Tab className="tab-app" eventKey="aktif" title="AKTIF">
              <p>
                Ini adalah aplikasi dan situs web di mana Anda login menggunakan Instagram dan baru
                saja digunakan. Aplikasi dan situs web tersebut dapat meminta info yang Anda pilih
                untuk dibagikan kepadanya.
              </p>
              <br />
              <p className="burem">
                Anda belum mengizinkan aplikasi apa pun untuk mengakses akun Instagram Anda.
              </p>
            </Tab>
            <Tab className="tab-app" eventKey="kedaluwarsa" title="KEDALUWARSA">
              <p>
                Ini adalah aplikasi dan situs web di mana Anda login menggunakan Instagram dan belum
                digunakan selama beberapa saat. Aplikasi dan situs web tersebut mungkin tetap
                memiliki akses ke info yang sudah Anda bagikan sebelumnya, tapi kemampuannya
                melakukan permintaan informasi pribadi tambahan sudah kedaluwarsa.
              </p>
              <br />
              <p className="burem">
                Anda tidak memiliki aplikasi kedaluwarsa yang memiliki akses ke akun Instagram Anda.
              </p>
            </Tab>
            <Tab className="tab-app" eventKey="dihapus" title="DIHAPUS">
              <p>
                Berikut ini adalah aplikasi dan situs web yang Anda hapus dari akun. Artinya, situs
                web tersebut masih bisa mengakses info yang sudah Anda bagikan sebelumnya, tapi
                tidak bisa membuat permintaan tambahan untuk info pribadi.
              </p>
              <br />
              <p className="burem">
                Anda tidak memiliki aplikasi yang sudah dihapus yang memiliki akses ke akun
                Instagram.
              </p>
            </Tab>
          </Tabs>
        </div>
      </Template>
    );
  }
}

class EmaildanSMS extends Component {
  render() {
    return (
      <Template {...this.props}>
        <div className="col-pad">
          <p className="head-setting">Berlangganan:</p>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check className="chkbx" type="checkbox" label="Email Masukan" />
            <Form.Text className="chk-cmnt">Beri masukan di Instagram.</Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check className="chkbx" type="checkbox" label="Email pengingat" />
            <Form.Text className="chk-cmnt">
              Dapatkan notifikasi yang mungkin Anda lewatkan.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check className="chkbx" type="checkbox" label="Email produk" />
            <Form.Text className="chk-cmnt">Dapatkan tips tentang fitur Instagram.</Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check className="chkbx" type="checkbox" label="Email berita" />
            <Form.Text className="chk-cmnt">Pelajari tentang fitur baru Instagram.</Form.Text>
          </Form.Group>
        </div>
      </Template>
    );
  }
}

class NotifikasiOtomatis extends Component {
  render() {
    return (
      <Template {...this.props}>
        <div className="col-pad">
          <p className="head-setting">Suka</p>
          <Form.Check className="chkbx" type="radio" label="Nonaktif" />
          <Form.Check className="chkbx" type="radio" label="Dari Orang yang Saya Ikuti" />
          <Form.Check checked className="chkbx" type="radio" label="Dari Semua Orang" />
          <Form.Text className="rad-cmnt">johnappleseed menyukai foto Anda.</Form.Text>
          <hr />
          <p className="head-setting">Komentar</p>
          <Form.Check className="chkbx" type="radio" label="Nonaktif" />
          <Form.Check checked className="chkbx" type="radio" label="Dari Orang yang Saya Ikuti" />
          <Form.Check className="chkbx" type="radio" label="Dari Semua Orang" />
          <Form.Text className="rad-cmnt">johnappleseed mengomentari: "Tembakan bagus!"</Form.Text>
          <hr />
          <p className="head-setting">Suka Komentar</p>
          <Form.Check className="chkbx" type="radio" label="Nonaktif" />
          <Form.Check checked className="chkbx" type="radio" label="Dari Orang yang Saya Ikuti" />
          <Form.Text className="rad-cmnt">
            johnappleseed menyukai komentar Anda: "Tembakan bagus!"
          </Form.Text>
          <hr />
          <p className="head-setting">Suka dan Komentar di Foto tentang Anda</p>
          <Form.Check className="chkbx" type="radio" label="Nonaktif" />
          <Form.Check className="chkbx" type="radio" label="Dari Semua Orang" />
          <Form.Check checked className="chkbx" type="radio" label="Dari Orang yang Saya Ikuti" />
          <Form.Text className="rad-cmnt">
            johnappleseed mengomentari sebuah kiriman yang menandai Anda.
          </Form.Text>
          <hr />
          <p className="head-setting">Permintaan Mengikuti Diterima</p>
          <Form.Check className="chkbx" type="radio" label="Nonaktif" />
          <Form.Check checked className="chkbx" type="radio" label="Dari Semua Orang" />
          <Form.Text className="rad-cmnt">
            John Appleseed (johnappleseed) menerima permintaan Anda untuk mengikutinya.
          </Form.Text>
          <hr />
          <p className="head-setting">Permintaan Instagram Direct</p>
          <Form.Check className="chkbx" type="radio" label="Nonaktif" />
          <Form.Check checked className="chkbx" type="radio" label="Dari Semua Orang" />
          <Form.Text className="rad-cmnt">johnappleseed ingin mengirimi Anda pesan.</Form.Text>
          <hr />
          <p className="head-setting">Instagram Direct</p>
          <Form.Check className="chkbx" type="radio" label="Nonaktif" />
          <Form.Check checked className="chkbx" type="radio" label="Dari Semua Orang" />
          <Form.Text className="rad-cmnt">johnappleseed mengirimi Anda pesan.</Form.Text>
          <hr />
          <p className="head-setting">Pengingat</p>
          <Form.Check className="chkbx" type="radio" label="Nonaktif" />
          <Form.Check checked className="chkbx" type="radio" label="Dari Semua Orang" />
          <Form.Text className="rad-cmnt">
            Anda memiliki notifikasi yang tidak terlihat, dan notifikasi serupa lainnya.
          </Form.Text>
          <hr />
          <p className="head-setting">Postingan dan Berita Pertama</p>
          <Form.Check className="chkbx" type="radio" label="Nonaktif" />
          <Form.Check checked className="chkbx" type="radio" label="Dari Orang yang Saya Ikuti" />
          <Form.Check className="chkbx" type="radio" label="Dari Semua Orang" />
          <Form.Text className="rad-cmnt">
            Lihat cerita pertama johnappleseed di Instagram, dan notifikasi serupa lainnya.
          </Form.Text>
          <hr />
          <p className="head-setting">Jumlah Tayangan IGTV</p>
          <Form.Check className="chkbx" type="radio" label="Nonaktif" />
          <Form.Check checked className="chkbx" type="radio" label="Dari Semua Orang" />
          <Form.Text className="rad-cmnt">
            Video IGTV Anda memiliki tayangan lebih dari 100K: "Video Baru Saya!".
          </Form.Text>
          <hr />
          <p className="head-setting">Permintaan Dukungan</p>
          <Form.Check className="chkbx" type="radio" label="Nonaktif" />
          <Form.Check checked className="chkbx" type="radio" label="Hidup" />
          <Form.Text className="rad-cmnt">
            Permintaan dukungan Anda dari Juli 10 baru saja diperbarui.
          </Form.Text>
          <hr />
          <p className="head-setting">Video Siaran Langsung</p>
          <Form.Check className="chkbx" type="radio" label="Nonaktif" />
          <Form.Check checked className="chkbx" type="radio" label="Hidup" />
          <Form.Text className="rad-cmnt">
            johnappleseed memulai video siaran langsung. Tonton sebelum siaran berakhir!
          </Form.Text>
          <br />
          <br />
          <br />
        </div>
      </Template>
    );
  }
}

class KelolaKontak extends Component {
  render() {
    return (
      <Template {...this.props}>
        <Container className="col-pad">
          <p className="head-setting">Kelola Kontak</p>
          <p className="desc-cont">
            Orang yang tercantum di sini adalah kontak yang Anda unggah ke Instagram. Untuk
            menghapus kontak yang disinkronkan, ketuk Hapus Semua. Kontak akan diunggah kembali saat
            Instagram menyinkronkan kontak Anda selanjutnya kecuali Anda membuka pengaturan
            perangkat dan menonaktifkan semua akses ke kontak.
            <br />
            <br />
            Hanya Anda yang dapat melihat kontak, tapi Instagram menggunakan info yang sudah
            diunggah tentang kontak untuk membuat saran teman bagi Anda dan lainnya, serta
            memberikan pengalaman yang lebih baik untuk semua orang.
          </p>
          <br />
          <Row className="row-cont">
            <Col>
              <h4 className="tersinkron">0 Kontak Tersinkron</h4>
            </Col>
            <Col>
              <button className="btn-non" type="submit" value="Submit">
                Hapus Semua
              </button>
            </Col>
          </Row>
        </Container>
      </Template>
    );
  }
}

class PrivasiKeamanan extends Component {
  render() {
    return (
      <Template {...this.props}>
        <Container className="col-pad">
          <p className="head-setting">Privasi Akun</p>
          <Form.Check className="chkbx" type="checkbox" label="Akun Pribadi" />
          <Form.Text className="chk-cmnt">
            Apabila akun bersifat pribadi, hanya orang yang Anda setujui yang dapat melihat foto dan
            video Anda di Instagram. Pengikut Anda yang ada tidak akan terpengaruh.
          </Form.Text>
          <hr />
          <p className="head-setting">Status Aktivitas</p>
          <Form.Check
            className="chkbx"
            type="checkbox"
            label="Tampilkan Status Aktivitas"
            checked
          />
          <Form.Text className="chk-cmnt">
            Izinkan akun yang Anda ikuti dan semua orang yang berkirim pesan dengan Anda untuk
            melihat kapan Anda terakhir aktif di aplikasi Instagram. Saat fitur ini dimatikan, Anda
            tidak akan bisa melihat status aktifitas akun lainnya.
          </Form.Text>
          <hr />
          <p className="head-setting">Berbagi Cerita</p>
          <Form.Check className="chkbx" type="checkbox" label="Izinkan Berbagi" />
          <Form.Text className="chk-cmnt">
            Izinkan orang membagikan cerita Anda sebagai pesan.
          </Form.Text>
          <hr />
          <p className="head-setting">Komentar</p>
          <a className="link" href=" ">
            Edit Pengaturan Komentar
          </a>
          <hr />
          <p className="head-setting">Foto tentang Anda</p>
          <Form.Check className="chkbx" type="radio" label="Tambahkan Otomatis" checked />
          <Form.Check className="chkbx" type="radio" label="Tambahkan Otomatis" />
          <Form.Text className="chk-cmnt">
            Pilih cara menambahkan foto tentang Anda ke profil.{" "}
            <a className="link" href=" ">
              Pelajari selengkapnya
            </a>{" "}
            Foto tentang Anda.
          </Form.Text>
          <hr />
          <p className="head-setting">Data Akun</p>
          <a className="link" href=" ">
            Lihat Data Akun
          </a>
          <hr />
          <p className="head-setting">Autentikasi Dua Faktor</p>
          <a className="link" href=" ">
            Edit Pengaturan Autentikasi Dua Faktor
          </a>
          <hr />
          <p className="head-setting">Unduhan Data</p>
          <a className="link" href=" ">
            Minta Unduhan
          </a>
          <hr />
          <p className="head-setting">Bantuan Privasi dan Keamanan</p>
          <a className="link" href=" ">
            Dukungan
          </a>
          <br />
          <br />
          <br />
          <br />
        </Container>
      </Template>
    );
  }
}

class AktivitasLogin extends Component {
  render() {
    return (
      <Template {...this.props}>
        <div className="col-pad">
          <p className="head-setting">Aktivitas Login</p>
          <p className="bold-txt">Ini Anda?</p>
          <p className="bold-txt">Tempat Anda Login</p>
        </div>
      </Template>
    );
  }
}

class EmailIG extends Component {
  render() {
    return (
      <Template {...this.props}>
        <div className="col-pad">
          <p className="head-setting">Email Dari Instagram</p>
        </div>
      </Template>
    );
  }
}
