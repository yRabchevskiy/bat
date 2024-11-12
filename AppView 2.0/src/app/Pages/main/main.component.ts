import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { IPage, Page } from '../../Models/pages/pages';
import { Router } from '@angular/router';
import { IUser, APP_ROLES } from '../../Store/interfaces/user';
import { Store } from '@ngrx/store';
import { IAppState } from '../../Store/state/app.state';
import { selectCurrentUser } from '../../Store/selectors/config.selector';
import { setSelectedPage } from '../../Store/actions/config.action';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  pages: IPage[] = [];

  constructor(private store: Store<IAppState>, private router: Router, private _userService: UserService) {
    if (!this._userService.isAuthcenticated()) {
      this.router.navigate(['/login']);
      return;
    }
    this.store.select(selectCurrentUser).subscribe(user => {
      if (user) {
        this.createPages(user);
        this.getCurrentUrl(this.router.url);
      }
    });
  }

  ngOnInit() {
  }

  getCurrentUrl(page: string) {
    const _page = this.pages.find(it => page.includes(it.id));
    const selectedPage = _page ? _page.id : this.pages[0].id;
    this.store.dispatch(setSelectedPage({ page: selectedPage}));
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
