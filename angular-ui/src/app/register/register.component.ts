
import { Component, Input } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
//import { AuthService } from '../services/auth.service';
import { IUser } from '../interfaces/user';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CheckboxModule, InputTextModule, ButtonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  @Input() user: IUser = {};
  isValid: boolean = false;
  password: string = '';

  constructor(private http: HttpClient, 
    private router: Router/*private auth: AuthService*/) {}

  formValidate() {
    this.isValid = this.user.username && this.user.username.trim().length > 0 &&
    this.user.password && this.user.password.trim().length > 0 && 
    this.user.password === this.password || false;
  }

  userRegister() {
    this.http
    .post('http://localhost:3000/register', this.user)
    .subscribe((data: any) => {
      this.router.navigate(['login'], { replaceUrl: true });
    });
    //this.auth.register(this.user);
  }
}
