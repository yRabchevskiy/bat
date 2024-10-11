export interface IPage {
  id: string;
  title: string;
  url: string;
  view: boolean;
}

export class Page {
  id: string;
  title: string = '';
  url: string = '';
  view: boolean = false;
  constructor(page: IPage) {
    this.title = page.title;
    this.url = page.url;
    this.view = page.view;
    this.id = page.id;
  }
}