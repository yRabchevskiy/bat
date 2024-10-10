import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../Services/api';
import { UserService } from '../../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    nickname: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  constructor(private apiService: ApiService, public userService: UserService,
    private router: Router, private activeRoute: ActivatedRoute) { }

  login() {
    this.apiService.login(this.loginForm?.value).subscribe({
      next: (res) => {

        this.userService.setLocal(res);
        this.router.navigate(['/home']);
        // if (res.item.isAdmin) {
        //   this.router.navigate([urlAndParams.url], { queryParams: urlAndParams.params });
        // } else {
        //   this.router.navigate(['/storage']);
        // }
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
