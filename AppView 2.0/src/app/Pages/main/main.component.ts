import { Component, OnInit } from '@angular/core';
import { SecuredComponent } from '../../Services/base-api.component';
import { UserService } from '../../Services/user.service';
import { IPage, Page } from '../../Models/pages/pages';
import { Router } from '@angular/router';
import { ApiService } from '../../Services/api';
import { APP_ROLES, IUser } from '../../Models/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent extends SecuredComponent implements OnInit {
  
  pages: IPage[] = [];

  private _selectedPage!: string;
  get selectedPage() { return this._selectedPage; }
  set selectedPage(page: string) {
    this.selectPage(page);
  }

  constructor(private userService: UserService, private router: Router, private apiService: ApiService) {
    super();
    if (!this.userService.user) return;
    this.createPages(this.userService.user);
    this.getCurrentUrl(this.router.url);
    // this.work = new WorkProgress(() => this.apiService.logout(), (res) => this.onLogoutConfirmed(res), undefined);

  }

  ngOnInit() {
  }

  selectPage(page: string) {
    this._selectedPage = page;
  }

  getCurrentUrl(page: string) {
    const _page = this.pages.find(it => page.includes(it.id));
    this.selectedPage = _page ? _page.id : this.pages[0].id;
  }

  createPages(_user: IUser) {
    this.pages = [
      new Page({ id: 'home', title: 'Основна', url: '/home', icon: 'bx-home', view: true }),
      new Page({ id: 'soldiers', title: 'ОС', url: '/soldiers', icon: 'bxs-group', view: !!_user.role }),
      new Page({ id: 'visits', title: 'Візити', url: '/visits', icon: 'bx-plus-medical', view: !!_user.role }),
      new Page({ id: 'inventory', title: 'Майно', url: '/inventory', icon: 'bx-library', view: _user.role === APP_ROLES.ADMIN }),
    ];
  }

}
