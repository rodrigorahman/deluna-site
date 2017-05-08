import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from "../map-page/map-page";

/**
 * Generated class for the DetalhesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detalhes-page',
  templateUrl: 'detalhes-page.html',
})
export class DetalhesPage {

  title: String;
  descricao: String;
  params: any;
  imagem: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params = navParams.get("parametros");
    this.title = this.params.title;
    this.descricao = this.params.descricao;
    this.imagem = "assets/"+ this.params.imagem;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }


  goToMap(){
    this.navCtrl.push(MapPage,  {parametros: {title: this.title, descricao: this.descricao}})
  }
}
