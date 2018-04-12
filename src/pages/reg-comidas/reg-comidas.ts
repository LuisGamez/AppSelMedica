import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-reg-comidas',
  templateUrl: 'reg-comidas.html',
})
export class RegComidasPage {

  username = '';
  email = '';
  user_id = 0;

  constructor(public nav: NavController, public navParams: NavParams, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
    this.user_id = info['user_id'];
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegComidasPage');
  }

}
