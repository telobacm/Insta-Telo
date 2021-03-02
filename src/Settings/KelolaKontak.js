import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Template from "../Components/Template";
import contacs from "./contacts.json";

class KelolaKontak extends Component {
  state = {
    kontak: contacs,
  };
  render() {
    return (
      <Template {...this.props}>
        <Container className="col-pad">
          <p className="head-setting">Kelola Kontak</p>
          <p className="desc-cont">
            Orang yang tercantum di sini adalah kontak yang Anda unggah ke Instagram. Untuk menghapus kontak yang disinkronkan, ketuk Hapus Semua. Kontak akan diunggah kembali saat Instagram
            menyinkronkan kontak Anda selanjutnya kecuali Anda membuka pengaturan perangkat dan menonaktifkan semua akses ke kontak.
            <br />
            <br />
            Hanya Anda yang dapat melihat kontak, tapi Instagram menggunakan info yang sudah diunggah tentang kontak untuk membuat saran teman bagi Anda dan lainnya, serta memberikan pengalaman yang
            lebih baik untuk semua orang.
          </p>
          <br />
          <Row className="row-cont">
            <Col>
              <h4 className="tersinkron">{this.state.kontak.data.user.contact_history.length} Kontak Tersinkron</h4>
            </Col>
            <Col>
              <button className="btn-non" type="submit" value="Submit">
                Hapus Semua
              </button>
            </Col>
          </Row>
          {this.state.kontak.data.user.contact_history.map((item, i) => (
            <div key={i}>
              <b>
                {item.first_name} {item.last_name}
              </b>
              <p>0{item.raw_value}</p>
            </div>
          ))}
        </Container>
      </Template>
    );
  }
}
export default KelolaKontak;
