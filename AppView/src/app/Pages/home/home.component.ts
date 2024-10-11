import { Component, OnInit } from '@angular/core';
import { APP_ROLES, IUser } from '../../Models/user';
import { IPage, Page } from '../../Models/pages/pages';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { ApiService } from '../../Services/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  pages: IPage[] = [];

  private _selectedPage: any;
  get selectedPage() { return this._selectedPage; }
  set selectedPage(page: any) {
    this.selectPage(page);
  }

  constructor(private userService: UserService, private router: Router, private apiService: ApiService) {
    const user = this.userService.getLocal();
    if (!user) return;
    this.createPages(user);
    this.getCurrentUrl(this.router.url);
    // this.work = new WorkProgress(() => this.apiService.logout(), (res) => this.onLogoutConfirmed(res), undefined);

  }

  ngOnInit() {
    this.getUserFromLocal();
  }

  selectPage(page: any) {
    this._selectedPage = page;
  }

  getCurrentUrl(page: string) {
    const _page = this.pages.find(it => page.includes(it.id));
    this.selectedPage = _page ? _page.url : this.pages[0].url;
  }

  getUserFromLocal() {
    const user = this.userService.getLocal();
  }

  createPages(_user: IUser) {
    this.pages = [
      new Page({ id: 'home', title: 'Основна', url: '/home', view: true }),
      new Page({ id: 'soldiers', title: 'ОС', url: '/soldiers', view: !!_user.role }),
      new Page({ id: 'visits', title: 'Візити', url: '/visits', view: !!_user.role }),
      new Page({ id: 'inventory', title: 'Майно', url: '/inventory', view: _user.role === APP_ROLES.ADMIN }),
    ];
  }
}
