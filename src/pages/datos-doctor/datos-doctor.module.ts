import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatosDoctorPage } from './datos-doctor';

@NgModule({
  declarations: [
    DatosDoctorPage,
  ],
  imports: [
    IonicPageModule.forChild(DatosDoctorPage),
  ],
})
export class DatosDoctorPageModule {}
