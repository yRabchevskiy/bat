import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { ApiService } from '../Services/api';
import { UserService } from '../Services/user.service';

class AuthConnectionErrorHandler {

  constructor(public owner: AuthGuard, public url: string) { }

  public handleConnectionError(error: Response | any) {
    this.owner.registerResult(false, this.url);
    return throwError(() => new Error('error while checking connection to server'));
  }
}

@Injectable()
export class AuthGuard  {

  static date: Date;

  static loadState() {
    const date = localStorage.getItem('user_auth_state_date');
    AuthGuard.date = date ? new Date(JSON.parse(date)) : new Date(2000, 0, 0);
  }

  static setSuccessDate(date?: Date) {
    AuthGuard.date = date || new Date();
    localStorage.setItem('user_auth_state_date', JSON.stringify(AuthGuard.date));
  }

  constructor(private apiService: ApiService, private router: Router, private userService: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // user not logged in, force to re-login
    if (!this.userService.getLocal()) return this.registerResult(false, state.url);
    const handler = new AuthConnectionErrorHandler(this, state.url);

    const rez = this.checkServer(state.url).pipe(catchError ((err) => handler.handleConnectionError(err)));

    if (!this.canBeAsync()) { // first request, sync mode
      return rez.pipe(
        take(1)
      );
    } else {
      rez.subscribe();
    }
    return true;
  }

  checkServer(url: string): Observable<boolean> {
    return this.apiService.checkAuth().pipe(map(res => {
      console.log('auth OK');
      return this.registerResult(res, url);
    },
      (err: any) => {
        console.log('auth error');
        return this.registerResult(false, url);
      },

    ));
  }

  public registerResult(result: boolean, url?: string): boolean {
    if (!result) {
      this.userService.clearLocal();
      this.redirectToLoginResult(url);
      AuthGuard.setSuccessDate(new Date(2000, 0, 0));
      return false;
    }

    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }

  private canBeAsync() {
    // we may perform async request only if this is not first one of previous check was performed not longer then
    // 5 minutes ago
    return (AuthGuard.date && this.getDiffInSeconds(AuthGuard.date) < 300);
  }

  private getDiffInSeconds(last: Date) {
    const diff = (new Date().getTime() - last.getTime());
    return diff / 1000; // sec
  }

  private redirectToLoginResult(url?: string) {
    this.router.navigate(['./login'], { queryParams: { return: url } });
  }


}

/*One time initialization*/
AuthGuard.loadState();
if (window.addEventListener) {
  window.addEventListener('storage', storage_event, false);
}

function storage_event(e: any) {
  console.log('Auth state was updated from other tab...');
  AuthGuard.loadState();
}