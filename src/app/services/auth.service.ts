import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth: any;

  constructor(private router: Router) { }

  login(uname: string, pword: string) {
    if (uname == 'admin' && pword == 'password') {
      return 200;

    } else {
      return 403;
    }
  }

  logout() {
    this.router.navigate(['login'])
  }
}
