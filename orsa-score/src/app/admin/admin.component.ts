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
      {id: 1, name: "test2", by: "Test", points: 0, motivation: "Eller gör han det?"}
    ];


    ngOnInit() {
    }

}
