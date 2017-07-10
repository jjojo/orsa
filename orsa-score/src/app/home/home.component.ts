import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  title = 'Bäckas Fläskmaräng 2017';
  
  ngOnInit() {
  }
  
  onSubmit(form: any): void {  
    console.log('you submitted value:', form);  
  }
  btnClick(){
    this.router.navigateByUrl('/dashboard');
  }

}
