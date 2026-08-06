import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login(): void {
    if (!this.username.trim() || !this.password) {
      return;
    }

    this.router.navigate(['/admin/dashboard']);
  }
}
