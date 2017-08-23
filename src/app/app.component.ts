import { Component } from '@angular/core';
import {AuthService} from "./core/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Les auberges de Jeunesse';

  user: string;
  password: string;

  constructor(
      private authService: AuthService,
  ) {
  }

  admin(){
    return this.authService.getAdmin();
  }

  disconnect(){
    this.authService.disconnect();
  }

  login(){
    if(this.authService.login(this.user,this.password)){
      alert("Vous êtes maintenant connecté. N'oubliez pas de vous déconnecter une fois terminé!");
    } else {
      alert("Erreur d'identification");
    }
    this.user = "";
    this.password = "";
  }

}
