import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navItems: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.navItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: [''],
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        routerLink: ['users'],
      },
    ];
  }
}
