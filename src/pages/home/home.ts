import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { MyApp } from './../../app/app.component';
 
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  email = '';
  constructor(private nav: NavController, private auth: AuthService,myapp : MyApp) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
    myapp.pages = [{
      titulo: 'Inicio', component: 'HomePage', icon: 'home'},
    { titulo: 'Registra tus Comidas', component: 'CalComidasPage', icon: 'basket' },
    { titulo: 'Seguimiento Semanal', component: 'SegSemanalPage', icon: 'calendar' },
    { titulo: 'Datos del Doctor', component: 'DatosDoctorPage', icon: 'medkit' },
    { titulo: 'Receta de la Semana', component: 'RecetaSemPage', icon: 'nutrition' },
    { titulo: 'Tip Ejercicio', component: 'TipEjercicioSemPage', icon: 'bicycle' }
    ];
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage');
    });
  }
}
