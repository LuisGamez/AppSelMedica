import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}



/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class AuthService {
  currentUser: User;

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }
 
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        console.log('http://localhost/app-selnutricion/login.php?email='+credentials.email+'&pass='+credentials.password);
        this.http.get('http://localhost/app-selnutricion/login.php?email='+credentials.email+'&pass='+credentials.password).subscribe(data => {
          console.log(data);
          console.log(data[0]['success']);
          console.log(data[0]['user']);

          //let access = (credentials.password === "pass" && credentials.email === "email");
          let access = (data[0]['success']);
          if(access)          
          this.currentUser = new User(data[0]['user']['pass'],data[0]['user']['email']);
          observer.next(access);
          observer.complete();
        });
        // At this point make a request to your backend to make a real check!
        
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
















