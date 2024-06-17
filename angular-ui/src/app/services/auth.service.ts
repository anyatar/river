import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private _isLogged$ = new Subject<boolean>();
  private _serverUrl = 'http://localhost:3000';

  public get isLogged(): Observable<boolean> {
    return this._isLogged$;
  }

  public set isLogged(value: boolean) {
    this._isLogged$.next(value);
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    console.log('token', token);
    return !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('access_token');
    this.isLogged = false;
  }

  login(email: string, password: string) {
    this.http
      .post(`${this._serverUrl}/login`, {
        username: email,
        password: password,
      })
      .subscribe((data: any) => {
        localStorage.setItem('access_token', data.token);
        this.router.navigate(['users'], { replaceUrl: true });
        this.isLogged = true;
      });
  }

  register(payload: IUser) {
    this.http
      .post(`${this._serverUrl}/register`, payload)
      .subscribe((data: any) => {
        this.router.navigate(['login'], { replaceUrl: true });
      });
  }
}
