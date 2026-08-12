import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredentials } from '../../core/interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { GlobalConstant } from '../../core/globalConstants/global.constant';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  providers: [HttpClient],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private router = inject(Router);
  private http = inject(HttpClient);

  loginCred: LoginCredentials = {
    username: '',
    password: ''
  }

  login(): void {
    if (!this.loginCred.username.trim() || !this.loginCred.password) {
      return;
    }

    this.http.post(environment.API_URL + 'login', this.loginCred).subscribe({
      next: (res: any) => {
        if (res.result = true) {
          localStorage.setItem(GlobalConstant.LOGIN_LOCAL_KEY, JSON.stringify(res.data))
          this.router.navigate(['/admin/dashboard']);
        }
        else {
          alert("Wrong login credetnials")
        }
      },
      error: (err: any) => {
        alert("API Error")
      }
    }

    )


  }
}
