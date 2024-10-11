import { Component, OnInit } from '@angular/core';
import { SecuredComponent } from '../../Services/base-api.component';
import { WorkProgress } from '../../Services/work-progress';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent extends SecuredComponent implements OnInit {
  
  constructor() {
    super();
    
  }

  ngOnInit() {
    
  }

}
