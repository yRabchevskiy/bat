import { Component, OnInit } from '@angular/core';
import { ISoldier } from '../../Models/soldiers';
import { SoldiersService } from '../../Services/soldiers.service';

@Component({
  selector: 'app-soldiers',
  templateUrl: './soldiers.component.html',
  styleUrl: './soldiers.component.scss',
})
export class SoldiersComponent implements OnInit {
  soldiers!: ISoldier[];
  visible: boolean = false;

  constructor(private _SoldiersService: SoldiersService) {}

  ngOnInit() {
    this.getData();
  }

  showDialog() {
    this.visible = true;
  }

  private getData(): void {
    this._SoldiersService
      .getSoldiers()
      .subscribe((data: ISoldier[]) => (this.soldiers = data));
  }
}
