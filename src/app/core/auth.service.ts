import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }
  admin: boolean = true;

  getAdmin(): boolean{
    return this.admin;
  }

  login(user,password){
    if(user=="admin" && password=="admin"){
      this.admin = true;
      return true;
    } else {
      return false;
    }
  }

  disconnect(){
    this.admin = false;
  }
}
