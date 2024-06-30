import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    // loggedIn
    // if (this.authService.isSessionValid()) {
    if (this.authService.loggedIn) {
      return true; // Allow access if the user is authenticated
    } else {
      this.router.navigate(['login']); // Redirect to login if not authenticated
      return false; // Prevent access to the route
    }
  }
}
