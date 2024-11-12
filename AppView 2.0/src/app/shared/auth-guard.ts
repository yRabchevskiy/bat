import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../Services/user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<any>, CanLoad {
  constructor(private _userService: UserService, private router: Router) {}
  canActivate(): boolean {
    return this.checkAuth();
  }

  canActivateChild(): boolean {
    return this.checkAuth();
  }

  canDeactivate(component: any): boolean { // any => component name
    if (component.hasUnsavedChanges()) {
      return window.confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }

  canLoad(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    if (this._userService.isAuthcenticated()) {
      return true;
    } else {
      // Redirect to the login page if the user is not authenticated
      this.router.navigate(['/login']);
      return false;
    }
  }
}
