import React, { Component } from "react";
import { Container, Form } from "react-bootstrap";
import Template from "../Components/Template";

class PrivasiKeamanan extends Component {
  render() {
    return (
      <Template {...this.props}>
        <Container className="col-pad">
          <p className="head-setting">Privasi Akun</p>
          <Form.Check className="chkbx" type="checkbox" label="Akun Pribadi" />
          <Form.Text className="chk-cmnt">
            Apabila akun bersifat pribadi, hanya orang yang Anda setujui yang dapat melihat foto dan video Anda di Instagram. Pengikut Anda yang ada tidak akan terpengaruh.
          </Form.Text>
          <hr />
          <p className="head-setting">Status Aktivitas</p>
          <Form.Check className="chkbx" type="checkbox" label="Tampilkan Status Aktivitas" checked />
          <Form.Text className="chk-cmnt">
            Izinkan akun yang Anda ikuti dan semua orang yang berkirim pesan dengan Anda untuk melihat kapan Anda terakhir aktif di aplikasi Instagram. Saat fitur ini dimatikan, Anda tidak akan bisa
            melihat status aktifitas akun lainnya.
          </Form.Text>
          <hr />
          <p className="head-setting">Berbagi Cerita</p>
          <Form.Check className="chkbx" type="checkbox" label="Izinkan Berbagi" />
          <Form.Text className="chk-cmnt">Izinkan orang membagikan cerita Anda sebagai pesan.</Form.Text>
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
export default PrivasiKeamanan;
