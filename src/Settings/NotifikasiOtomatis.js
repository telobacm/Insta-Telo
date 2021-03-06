import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Template from "../Components/Template";
import { push_prefs } from "./notifications.json";
//kalo nama file nya index, bisa dipanggil dari folder tanpa disebut nama
import { IsJsonString } from "../Helpers";

export default class NotifikasiOtomatis extends Component {
  constructor(props) {
    super(props);

    let nilaiAwal = {};
    const NotifikasiOto = localStorage.NotifikasiOto;
    // localStorage.NotifikasiOto = localStorage.getItem("NotifikasiOto")
    if (IsJsonString(NotifikasiOto)) {
      nilaiAwal = JSON.parse(NotifikasiOto);
    } else {
      localStorage.removeItem("NotifikasiOto");
      for (const pp of push_prefs) {
        nilaiAwal[pp.name] = pp.checked;
      }
      localStorage.setItem("NotifikasiOto", JSON.stringify(nilaiAwal));
    }
    this.state = nilaiAwal;
  }

  onChange = async (e) => {
    // versi panjang
    /*const name = e.target.name;
    const value = e.target.name;*/

    // versi ringkas
    const { name, value } = e.target;
    console.log(e);

    //versi panjang
    /*const gantistate = {};
    gantistate[name] = value;
    await this.setState(gantistate);*/

    //versi ringkas
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
                <hr style={{ backgroundColor: "#ddd" }} />
              </div>
            );
          })}
        </div>
      </Template>
    );
  }
}
