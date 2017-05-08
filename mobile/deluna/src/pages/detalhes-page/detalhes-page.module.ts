import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesPage } from './detalhes-page';

@NgModule({
  declarations: [
    DetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesPage),
  ],
  exports: [
    DetalhesPage
  ]
})
export class DetalhesPageModule {}
