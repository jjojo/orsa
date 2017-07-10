import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  message: string;
  password: string;

  constructor( private router: Router, private loginService: LoginService) { }
  title = 'Bäckas Fläskmaräng 2017';
  
  ngOnInit() {
  }
  
  onSubmit(form: any): void {  
    console.log('Inloggad som: ', form.username )
    this.loginService.login(form.username, form.password).then( sucess => {
      console.log(this.loginService.user)
       if(this.loginService.isSignedIn && this.loginService.user === 'admin'){
        this.router.navigate(['admin']);
       }
       else if (this.loginService.isSignedIn) {
        this.router.navigate(['dashboard']);
      }
    })
    
  }

  btnClick(){
    //this.router.navigateByUrl('/dashboard');
  }

}
