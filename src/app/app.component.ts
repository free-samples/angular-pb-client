import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  isLoggedIn = false;
  emittedLoginSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router){

  }

  ngOnInit(): void {
    this.emittedLoginSubscription = this.authService.emitLogin().subscribe( ()=> alert(123) );
  }

}
