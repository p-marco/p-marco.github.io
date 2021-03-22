import { Component, OnInit } from '@angular/core';
import * as data  from '../data/resume.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marcopetolicchio';
  data: any = (data as any).default;

  constructor() {
    console.log('Reading local json files');
    console.log(data.basics.name);
   }
  ngOnInit(): void {
  }
}
