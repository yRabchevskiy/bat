import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../Services/api';
import { UserService } from '../../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IApiRes } from '../../Models/api';
import { IUser } from '../../Store/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  error?: IApiRes<IUser>;
  loginForm: FormGroup = new FormGroup({
    nickname: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  constructor(private apiService: ApiService, public userService: UserService,
    private router: Router, private activeRoute: ActivatedRoute) { }

  login() {
    this.apiService.login(this.loginForm?.value).subscribe({
      next: (res: IApiRes<IUser>) => {
        console.log(res);
        debugger
        this.userService.setLocal(res.data);
        this.router.navigate(['/home']);
        // if (res.item.isAdmin) {
        //   this.router.navigate([urlAndParams.url], { queryParams: urlAndParams.params });
        // } else {
        //   this.router.navigate(['/storage']);
        // }
      },
      error: (err: any) => {
        this.error = err.error.error as IApiRes<IUser>;
        console.log(err);
      }
    });
  }
}
