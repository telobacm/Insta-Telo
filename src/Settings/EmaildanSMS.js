import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Template from "../Components/Template";

class EmaildanSMS extends Component {
  render() {
    return (
      <Template {...this.props}>
        <div className="col-pad">
          <p className="head-setting">Berlangganan:</p>
          <Form>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check className="chkbx" type="checkbox" label="Email Masukan" />
              <Form.Text className="chk-cmnt">Beri masukan di Instagram.</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check className="chkbx" type="checkbox" label="Email pengingat" />
              <Form.Text className="chk-cmnt">Dapatkan notifikasi yang mungkin Anda lewatkan.</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check className="chkbx" type="checkbox" label="Email produk" />
              <Form.Text className="chk-cmnt">Dapatkan tips tentang fitur Instagram.</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check className="chkbx" type="checkbox" label="Email berita" />
              <Form.Text className="chk-cmnt">Pelajari tentang fitur baru Instagram.</Form.Text>
            </Form.Group>
          </Form>
        </div>
      </Template>
    );
  }
}
export default EmaildanSMS;
