import { Component, OnInit } from '@angular/core';
import { IBatMap } from '../../Models/bat_map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  batMapData: IBatMap | null = null;
  loading: boolean = false;
  error: string | null = null;
  constructor() {
    
  }

  ngOnInit() {
  }

}
