import { Component, OnInit } from '@angular/core';
import {SuggestionService} from '../services/suggestion.service'
@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component..styl']
})



export class AdminComponent implements OnInit {

    constructor( private suggestionService: SuggestionService) {
    
    }

    scoreSuggestions = [
    ];


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

