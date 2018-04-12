import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-seg-semanal',
  templateUrl: 'seg-semanal.html',
})
export class SegSemanalPage {
  username = '';
  email = '';
  user_id = 0;

  constructor(public nav: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
    this.user_id = info['user_id'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegSemanalPage');
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

}
