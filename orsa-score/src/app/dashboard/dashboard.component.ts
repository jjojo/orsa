import { Component, OnInit } from '@angular/core';
import {SuggestionService} from '../services/suggestion.service'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component..styl']
})
export class DashboardComponent implements OnInit {
  
  suggestions: FirebaseListObservable<any[]>;
  db: AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.suggestions = db.list('/suggestions');
  }

  getSuggsetionTest() {
        console.log(this.suggestions)

    return this.db.list('/suggestions', {query: {limitToLast: 10}}).map( list => {
      console.log(list)
       return list;
     })
  }

  addItem(newName: string) {
    this.suggestions.push({ text: newName });
  }

  user= 'Jesper';

  ngOnInit() {
  }
  peoples  = [
    { name: 'Jesper'},
    { name: 'Axel'},
    { name: 'Oliver'},
    { name: 'Jonas'},
    { name: 'Andreas'},
    { name: 'Johan A'},
    { name: 'Krillmackan'},
    { name: 'Christian'}
  ];

}
