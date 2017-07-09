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
            console.log(suggestions);
            this.scoreSuggestions = suggestions;
        })
    }

    addpoints(points) {
        
        this.scoreSuggestions[0].points
        console.log(points);
    }



}

