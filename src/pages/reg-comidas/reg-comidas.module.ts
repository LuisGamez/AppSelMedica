import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegComidasPage } from './reg-comidas';

@NgModule({
  declarations: [
    RegComidasPage,
  ],
  imports: [
    IonicPageModule.forChild(RegComidasPage),
  ],
})
export class RegComidasPageModule {}
