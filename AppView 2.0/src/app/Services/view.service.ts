import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, throttleTime } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Injectable({ providedIn: 'root' })
export class ViewService {

  private _view = new BehaviorSubject(false);

  public view = this._view.asObservable();

  private breakpoints: string[] = ['(max-width: 1024px)'];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(this.breakpoints)
      .subscribe((result: BreakpointState) => {
        this._view.next(result.matches);
      });
  }
}
