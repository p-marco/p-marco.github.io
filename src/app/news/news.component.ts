import { Component, OnInit } from '@angular/core';

import * as news  from '../../data/news.json';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: any = (news as any).default;
  constructor() { }
  currentDate = new Date();

  itemList = news.news.map(x => ({
    ...x, 
    isGreaterThanToday:  new Date(x.startDate) > this.currentDate
   }));
  ngOnInit(): void {
  }

}
