import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import PocketBase from 'pocketbase';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  pb: PocketBase;
  emittedLoginEvent = new Subject();

  constructor() { 
    this.pb = new PocketBase(environment.baseUrl);
  }

  emitLogin(){
    return this.emittedLoginEvent.asObservable();
  }

  public isSessionValid()
  {
    return this.pb.authStore.isValid;
  }

}
