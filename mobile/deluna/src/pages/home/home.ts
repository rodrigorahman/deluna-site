import { Component } from '@angular/core';
import { ActionSheetController, NavController } from 'ionic-angular';
import { MapPage } from "../map-page/map-page";
import { DetalhesPage } from "../detalhes-page/detalhes-page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private actionSheetCtrl: ActionSheetController) {

  }

  public viewItem(title: string, descricao: string, imagem: string) {
    let actionSheet = this.actionSheetCtrl.create({
      title: title,
      buttons: [
        {
          text: 'Traçar uma Rota',
          handler: () => {
            console.log("trancando rota ");
            this.navCtrl.push(MapPage, {parametros: {title: title, descricao: descricao}})
          }
        },
        {
          text: 'Ver Detalhes',
          handler: () => {
            console.log("Ver Detalhes ");
            this.navCtrl.push(DetalhesPage, {parametros: {title: title, descricao: descricao, imagem: imagem}})
          }
        },
        {
          text: 'Ver no Mapa',
          handler: () => {
            console.log("Ver Detalhes ");
            this.navCtrl.push(MapPage, {parametros: {title: title, descricao: descricao}})
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            console.log("Cancelar ");
          }
        },
      ]
    });
    actionSheet.present();
  }

}
