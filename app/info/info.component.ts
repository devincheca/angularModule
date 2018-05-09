import { Component, OnInit } from '@angular/core';
import { INFORMATION } from '../tabs';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  infos = INFORMATION
  firstTab = this.infos[0];
  activeInfo = 
  {
    header: 'Centinela Adobe',
    details: '\n'
  }

  ngOnInit() {
  }

  onClick(info)
  {
    this.activeInfo.header = info.header;
    this.activeInfo.details = info.details;
  }

}
