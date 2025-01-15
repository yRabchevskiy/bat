import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../Services/api';
import { UserService } from '../../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IApiRes } from '../../Models/api';
import { IUser } from '../../Store/interfaces/user';
import { Store } from '@ngrx/store';
import { login } from '../../Store/actions/config.action';
import { selectCurrentUser } from '../../Store/selectors/config.selector';
import { IAppState } from '../../Store/state/app.state';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    standalone: false
})
export class LoginComponent {
  error?: IApiRes<IUser>;
  loginForm: FormGroup = new FormGroup({
    nickname: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  constructor(private store: Store<IAppState>, public userService: UserService, private router: Router) {
    this.store.select(selectCurrentUser).subscribe({
      next: (res: IUser | null) => {
        if (!res) return;
        this.userService.setLocal(res);
        this.router.navigate(['/home']);
      },
      error: (err: any) => {
        this.error = err.error.error as IApiRes<IUser>;
        console.log(err);
      }
    });
  }

  login() {
    this.store.dispatch(login(this.loginForm?.value));
  }
}
