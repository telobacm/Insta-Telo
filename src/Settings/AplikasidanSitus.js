import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Template from "../Components/Template";

class AplikasidanSitus extends Component {
  render() {
    return (
      <Template {...this.props}>
        <div>
          <h2 className="app-site-web">Aplikasi dan Situs Web</h2>
          <Tabs className="tabs-app" defaultActiveKey="aktif" transition={false} id="noanim-tab-example">
            <Tab className="tab-app" eventKey="aktif" title="AKTIF">
              <p>
                Ini adalah aplikasi dan situs web di mana Anda login menggunakan Instagram dan baru saja digunakan. Aplikasi dan situs web tersebut dapat meminta info yang Anda pilih untuk dibagikan
                kepadanya.
              </p>
              <br />
              <p className="burem">Anda belum mengizinkan aplikasi apa pun untuk mengakses akun Instagram Anda.</p>
            </Tab>
            <Tab className="tab-app" eventKey="kedaluwarsa" title="KEDALUWARSA">
              <p>
                Ini adalah aplikasi dan situs web di mana Anda login menggunakan Instagram dan belum digunakan selama beberapa saat. Aplikasi dan situs web tersebut mungkin tetap memiliki akses ke
                info yang sudah Anda bagikan sebelumnya, tapi kemampuannya melakukan permintaan informasi pribadi tambahan sudah kedaluwarsa.
              </p>
              <br />
              <p className="burem">Anda tidak memiliki aplikasi kedaluwarsa yang memiliki akses ke akun Instagram Anda.</p>
            </Tab>
            <Tab className="tab-app" eventKey="dihapus" title="DIHAPUS">
              <p>
                Berikut ini adalah aplikasi dan situs web yang Anda hapus dari akun. Artinya, situs web tersebut masih bisa mengakses info yang sudah Anda bagikan sebelumnya, tapi tidak bisa membuat
                permintaan tambahan untuk info pribadi.
              </p>
              <br />
              <p className="burem">Anda tidak memiliki aplikasi yang sudah dihapus yang memiliki akses ke akun Instagram.</p>
            </Tab>
          </Tabs>
        </div>
      </Template>
    );
  }
}
export default AplikasidanSitus;
