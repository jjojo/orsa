import { Component, OnInit } from '@angular/core';
import {SuggestionService} from '../services/suggestion.service'
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router';


@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component..styl']
})



export class AdminComponent implements OnInit {

    constructor( private router: Router,private loginService: LoginService, private suggestionService: SuggestionService) {
        this.loginService = loginService
        if (!loginService.isSignedIn && this.loginService.user !== 'admin') {
            router.navigate(['/']);
        }
    }

    scoreSuggestions = [
    ];

    btnClick(){
    this.router.navigateByUrl('/highscore');
  }


    ngOnInit() {
        this.suggestionService.getSuggestions().subscribe(suggestions => {
            this.scoreSuggestions = suggestions;
        })
    }

    acceptData(suggestion) {
        // POINTS MUST BE SENT AS NUMBER!
        this.suggestionService.updateHighscore(suggestion.targetID, parseInt(suggestion.points), suggestion.$key)

    }

    declineData(suggestion) {
        this.suggestionService.deleteSuggestion(suggestion.$key);
    }

    addPoints(suggestion) {
        if(suggestion.points < 10){
           suggestion.points++;
        }
        if(suggestion.points===0) suggestion.points = 1
    }

    subtractPoints(suggestion) {
        if(suggestion.points>-10){
           suggestion.points--;
        }
        if(suggestion.points===0) suggestion.points = -1
    }



}

