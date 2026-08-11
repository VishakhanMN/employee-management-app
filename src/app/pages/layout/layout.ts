import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { loggedInEmployeeData } from '../../core/interfaces/interfaces';
import { GlobalConstant } from '../../core/globalConstants/global.constant';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, CommonModule, FormsModule, RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit {

  isMenuOpened = signal<boolean>(true);
  isUserMenuOpened = signal<boolean>(false);
  loggedInUser!: loggedInEmployeeData;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const userData = localStorage.getItem(GlobalConstant.LOGIN_LOCAL_KEY);
    this.loggedInUser = userData ? JSON.parse(userData) : {} as loggedInEmployeeData;
  }

  toggleMenuIcon(): any {
    this.isMenuOpened.update(value => !value)
  }

  toggleUserMenu(): void {
    this.isUserMenuOpened.update(value => !value);
  }

  logout(): void {
    localStorage.removeItem(GlobalConstant.LOGIN_LOCAL_KEY);
    this.router.navigateByUrl('/login');
  }

}
