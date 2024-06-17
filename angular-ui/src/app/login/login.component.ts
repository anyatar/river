import { Component, Input } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CheckboxModule, InputTextModule, ButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Input() email: string  = '';
  @Input() password: string  = '';  
  rememberme: boolean = false;
  isValid: boolean = false;

  constructor(private auth: AuthService) {
  
  }
  formValidate() {
    this.isValid = this.email.trim().length > 0 && this.password.trim().length > 0 || false;
  }

  userLogin() {
    this.auth.login(this.email, this.password);
  }
}
