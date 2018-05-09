import { Component, Input, OnInit } from '@angular/core';
import { Info } from '../info';
@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.css']
})
export class InfoDetailComponent implements OnInit {

  constructor() { }

  @Input() info: Info;

  ngOnInit() {
  }

}
