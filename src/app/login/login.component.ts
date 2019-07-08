import { Component } from '@angular/core';
import { AppService } from '/home/dhruvparmar/NodeJS/angular/contact-us/src/app/app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  title = 'contact-us';
  email='';
  password='';

  constructor(private data:AppService, private router:Router){

  }

  Login()
  {
  
    if(this.email==this.data.login_id && this.password==this.data.password)
    {
        this.router.navigate(['/home','Dhruv'])
      
    }
    else{

      alert("Email and Password Wrong..!")
    }
  }

}
