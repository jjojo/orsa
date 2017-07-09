import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component..styl']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  user='jesper';

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
    console.log('you submitted value:', form);  
  }
  getUser() {
    return this.user;
  }
}
