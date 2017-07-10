import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component..styl']
})
export class HighscoreComponent implements OnInit {

  constructor() {
   }
  scoreList = [
        {name:'jesper', points:100},
        {name:'jonas', points:4},
        {name:'axel', points:8},
      ]

  ngOnInit() {
  }


}
