import { Component, OnInit } from '@angular/core';
import {SuggestionService} from '../services/suggestion.service'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service'
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component..styl']
})



export class DashboardComponent implements OnInit {

  suggestions: any
  user: string


  constructor( private firebaseAuth: AngularFireAuth, private loginService: LoginService, private router: Router, private suggestionService: SuggestionService) { 
    this.loginService = loginService
    if (!loginService.isSignedIn) {
      router.navigate(['/'])
    }
    this.user = this.loginService.user.charAt(0).toUpperCase() + this.loginService.user.slice(1);
  }

  errorMsg: string

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
 
  ngOnInit() {
    this.peoples.forEach(obj => {
      if( obj.name === this.user){
        this.peoples.splice(this.peoples.indexOf(obj), 1)
      }
    })
  }
  

  onSubmit(form: any): void {
    form.senderID = this.user;
    if(form.targetID === "" || form.points === "" || form.motivering ===""){
      this.errorMsg = "Fyll i alla fält fyllo!"
    }else{
      this.suggestionService.addSuggestion(form)
      this.errorMsg = "Tack!"
    }
  }

}
