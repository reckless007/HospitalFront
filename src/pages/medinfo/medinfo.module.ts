import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedinfoPage } from './medinfo';

@NgModule({
  declarations: [
    MedinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MedinfoPage),
  ],
})
export class MedinfoPageModule {}
