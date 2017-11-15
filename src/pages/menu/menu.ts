import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Usuario } from "../../clases/usuario";

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  private datos:{};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl:AlertController

  ) {}

  ionViewDidLoad() {
    this.datos = JSON.parse(this.navParams.data);
    console.log(this.navParams.data);
  }




  private irAPerfil():void{
    this.navCtrl.push("PerfilPage", {"correo" : this.datos["correo"], "perfil":this.datos["perfil"]});
  }

  private irAFormAlumnos(){
    this.navCtrl.push('AlumnosFormPage');
  }



}