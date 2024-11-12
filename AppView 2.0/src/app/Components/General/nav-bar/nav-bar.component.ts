import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IPage } from '../../../Models/pages/pages';
import { IAppState } from '../../../Store/state/app.state';
import { Store } from '@ngrx/store';
import { setSelectedPage } from '../../../Store/actions/config.action';
import { selectSelectedPage } from '../../../Store/selectors/config.selector';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @Input() pages: IPage[] = [];
  selectedPage: string = '';
  constructor(private router: Router, private store: Store<IAppState>) {
    this.store.select(selectSelectedPage).subscribe(page => {
      this.selectedPage = page;
    });
  }

  onClick($param: string): void {
    this.router.navigate([$param]);
    this.store.dispatch(setSelectedPage({ page: $param}));
  }
}
