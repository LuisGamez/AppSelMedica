import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalComidasPage } from './cal-comidas';

@NgModule({
  declarations: [
    CalComidasPage,
  ],
  imports: [
    IonicPageModule.forChild(CalComidasPage),
  ],
})
export class CalComidasPageModule {}
