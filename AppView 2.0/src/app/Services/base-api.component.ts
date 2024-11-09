import { Directive } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { WorkProgress } from './work-progress';

@Directive()
export abstract class SecuredComponent {
  
  constructor() {
  }

  cloneModel<T>(source: T): T {
    if (source === undefined) return <any>{};
    const str = JSON.stringify(source);
    return JSON.parse(str);
  }


  showApiErrorMessage(summary: string, res: any) {
    const errors = res.errors || [];
    // const message = errors.map((it: any) => `${it.field}: ${it.message}\n`).reduce((text, line) => text += line, '');
  }

}

@Directive()
export abstract class BaseApiComponent<T> extends SecuredComponent {
  work: WorkProgress;


  public get showSpinner() {
    return this.work.showSpinner;
  }

  constructor() {
    super();
    this.work = new WorkProgress(() => this.doGetData(), (res) => this.onDataReceived(res), undefined);
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.work.startRequest();
  }

  abstract doGetData(): Observable<any>;
  abstract onDataReceived(res: any): any;
}
