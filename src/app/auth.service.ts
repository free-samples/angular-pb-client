import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import PocketBase from 'pocketbase';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  pb: PocketBase;

  constructor() { 
    this.pb = new PocketBase(environment.baseUrl);
  }
}
