import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component..styl']
})



export class AdminComponent implements OnInit {

    constructor() {
    }

    scoreSuggestion = [
      {id: 0, name: "test", by: "Test2", points: 2, motivation: "Jesper luktar bajs"},
      {id: 1, name: "test2", by: "Test", points: 0, motivation: "Eller gör han det? as d sad sad sa da sd sad ads as das d ad asd asd asd asd asd as d asd as dsa a sd sad dsa dsa ads ads dsa dsa das dsa ads dsa ads dsa  dsa dsa dsa ads"}
    ];


    ngOnInit() {
    }

    addpoints(points) {
        points++;
        console.log(points);
    }



}

