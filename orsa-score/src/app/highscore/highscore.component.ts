import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../services/suggestion.service'
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component..styl']
})
export class HighscoreComponent implements OnInit {

  constructor( private router: Router, private loginService: LoginService, private suggestionService: SuggestionService) {
        this.loginService = loginService
        if (!this.loginService.isSignedIn && this.loginService.user !== 'admin') {
            router.navigate(['/']);
        }
    }
  scoreList = []

  ngOnInit() {
    this.suggestionService.getHighscore().subscribe(highscores => {
            this.scoreList = highscores;
        })
  }


}
