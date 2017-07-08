import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component..styl']
})
export class DashboardComponent implements OnInit {

  constructor() { }
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
