import { Component, OnInit } from '@angular/core';
import {SuggestionService} from '../services/suggestion.service'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component..styl']
})



export class DashboardComponent implements OnInit {

  suggestions: any

  constructor( private router: Router, private suggestionService: SuggestionService) { }

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

  onSubmit(form: any): void {
    form.senderID = this.user;
    this.suggestionService.addSuggestion(form)
    window.location.reload();

  }
  getUser() {
    return this.user;
  }
}
