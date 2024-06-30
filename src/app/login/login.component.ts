import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor( private authService: AuthService, private router: Router ){

  }
  
  login(){
    this.authService.loggedIn = true;
    this.router.navigateByUrl('');
    this.authService.emittedLoginEvent.next(true);
  }
}
