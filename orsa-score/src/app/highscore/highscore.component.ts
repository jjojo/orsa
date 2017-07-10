import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../services/suggestion.service'

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component..styl']
})
export class HighscoreComponent implements OnInit {

  constructor(private suggestionService: SuggestionService) {
   }
  scoreList = []

  ngOnInit() {
    this.suggestionService.getHighscore().subscribe(highscores => {
            this.scoreList = highscores;
        })
  }


}
