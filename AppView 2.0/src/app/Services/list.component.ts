import { Input, Directive } from '@angular/core';
import { SecuredComponent } from './base-api.component';

@Directive()
export abstract class ListComponent<TCol> extends SecuredComponent {

  public data: TCol[] = []; // initial data provided to this component.

  public selectedItem: TCol | undefined; // selected Item
  public keepSelection: boolean = false;


  constructor() {
    super();
  }

  setData(res: TCol[]) {
    let safeRes = res || [];
    this.data = safeRes;
  }

  getId(item: TCol): string {
    return (<any>item).Id;
  }
  
  removeById(id: string) {
    const item = this.data.find(it => this.getId(it) === id);
    if (!item) return;
    this.remove(item);
  }

  remove(item: TCol) {
    // remove from list
    const index = this.data.indexOf(item);
    if (index > -1) {
      this.data = this.data.filter(it => it !== item);
    }

    // handle when removed is the selected one
    if (item === this.selectedItem)
      this.reselect(index);
  }

  add(item: TCol) {
    this.selectedItem = item;
    this.data.push(item);
    this.data.slice();
    this.select(item);
  }

  updateData(id: string, item: TCol) {
    const i = this.data.findIndex(it => (<any>it)._id === id);
    this.selectedItem = item;
    this.data.splice(i, 1, item);
    this.select(item);
  }

  reselect(oldIndex: number | undefined = undefined) {

    if (this.keepSelection) return;

    let itemToSelect = undefined
    if (this.data.length > 0) {
      if (!oldIndex || oldIndex < 0) {
        itemToSelect = this.data[0];
      } else if (oldIndex < this.data.length) {
        itemToSelect = this.data[oldIndex]; // try to keep position
      } else {
        // ensure that we can select previous index, or if it was bigger then whole list - last element;
        let mimIndex = Math.min(this.data.length - 1, oldIndex - 1);
        itemToSelect = this.data[mimIndex];
      }
    }
    this.select(itemToSelect);
  }

  selectById(id: string) {
    const item = this.data.find(it => this.getId(it) === id);
    if (!item) return;
    this.select(item);
  }

  select(item: TCol | TCol[] | undefined, silent: boolean = false) {
    if (!item) { // deselect
      this.selectedItem = undefined;
    } else {     // select
      if (item instanceof Array) {
        this.selectedItem = item[0]
      } else {
        this.selectedItem = item;
      }
    }

    if (!silent)
      this.onSelect(item);
  }

  onRowClick(item: any) {
    this.select(item);
  }

  onSelect(item: TCol | TCol[] | undefined) {
  }

  onFiltered() {

  }

}
