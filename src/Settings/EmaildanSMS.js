import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Template from "../Components/Template";
import emailSMSJSON from "./emailSMS.json";
import { IsJsonString } from "../Helpers";

class EmaildanSMS extends Component {
  state = {
    settings: [],
  };
  async componentDidMount() {
    let { settings } = this.state;
    const localSettings = localStorage.email_settings;
    if (IsJsonString(localSettings)) {
      settings = JSON.parse(localSettings);
    } else {
      settings = emailSMSJSON.email_settings;
    }
    this.setState({ settings });
  }
  onChange(e, i) {
    const { /* name, */ checked } = e.target;
    const { settings } = this.state;
    const value = checked ? 2 : 1;
    // console.log(i, name, checked, value);
    console.log("before", settings[i]);
    settings[i] = { ...settings[i], checked: value };
    // settings[i] = Object.assign(settings[i], { checked: value });
    console.log("after", settings[i]);
    this.setState({ settings });
    localStorage.email_settings = JSON.stringify(settings);
  }
  render() {
    const { settings } = this.state;
    console.log(settings[0]?.checked);
    return (
      <Template {...this.props}>
        <div className="col-pad">
          <p className="head-setting">Berlangganan:</p>
          <Form>
            {settings.length &&
              settings.map((s, i) => {
                return (
                  <Form.Group controlId={s.name}>
                    <Form.Check className="chkbx" type="checkbox" defaultChecked={settings[i].checked === 2} name={s.name} label={s.title} onChange={(e) => this.onChange(e, i)} />
                    <Form.Text className="chk-cmnt">{s.example}</Form.Text>
                  </Form.Group>
                );
              })}
          </Form>
        </div>
      </Template>
    );
  }
}
export default EmaildanSMS;
