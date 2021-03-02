import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Template from "../Components/Template";
import { push_prefs } from "./notifications.json";

function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
class NotifikasiOtomatis extends Component {
  constructor(props) {
    super(props);

    let defaultState = {};
    const NotifikasiOto = localStorage.NotifikasiOto;
    if (IsJsonString(NotifikasiOto)) {
      defaultState = JSON.parse(NotifikasiOto);
    } else {
      localStorage.removeItem("NotifikasiOto");
      for (const pp of push_prefs) {
        defaultState[pp.name] = pp.checked;
      }
      localStorage.setItem("NotifikasiOto", JSON.stringify(defaultState));
    }
    this.state = defaultState;
  }

  onChange = async (e) => {
    const { name, value } = e.target;
    // const asd = {a: "1"}
    // const x = 'e'
    // asd.b = 2
    // asd[x] = 3
    // console.log(asd.e)

    /* // versi panjang
    const stt = {}
    stt[name] = value
    await this.setState(stt); */

    // versi ringkas
    await this.setState({ [name]: value });
    localStorage.setItem("NotifikasiOto", JSON.stringify(this.state));
  };
  render() {
    return (
      <Template {...this.props}>
        <div className="col-pad">
          {push_prefs.map((pp, i) => {
            return (
              <div>
                <p className="head-setting">{pp.title}</p>
                {pp.options.map((opt) => {
                  const label = opt[0];
                  const id = opt[1];
                  // console.log(pp.checked, this.state[pp.name], id);
                  return <Form.Check id={pp.name + id} onChange={this.onChange} defaultChecked={this.state[pp.name] === id} name={pp.name} className="chkbx" type="radio" value={id} label={label} />;
                })}
                <Form.Text className="rad-cmnt">{pp.example}</Form.Text>
                <hr />
              </div>
            );
          })}
        </div>
      </Template>
    );
  }
}
export default NotifikasiOtomatis;
