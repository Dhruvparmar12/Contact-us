import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AppService{


details=[];

login_id="dhruvrajput62@gmail.com";
password="123456"


addDatails(fname:string,lname:string,email:string,mobile:string,address:string){
    
    
    this.details.push({

        firstname:fname,
        lastname:lname,
        email:email,
        mobile:mobile,
        address:address

    })
}
}