import { AfterViewInit, Directive, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ListComponent } from "./list.component";
import { WorkProgress } from "./work-progress";

@Directive()
export abstract class ApiListComponentBase<T, TCol> extends ListComponent<TCol> implements OnInit, AfterViewInit {

  work = new WorkProgress(() => this.doGetData(), (res) => this.onDataReceived(res), undefined);
  constructor() {
    super();
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.refresh();
  }

  refresh() {
    this.work.startRequest();
  }

  public get showSpinner() {
    return this.work.showSpinner;
  }

  abstract doGetData(): Observable<any>;
  abstract onDataReceived(res: any): any;

}

@Directive()
export abstract class ApiListComponent<T> extends ApiListComponentBase<T, T> {

  constructor() {
    super();
  }

  onDataReceived(res: any) {
    this.setData(res);
  }

}