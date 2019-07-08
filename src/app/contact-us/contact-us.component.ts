import { Component, OnInit } from '@angular/core';
import {AppService } from '/home/dhruvparmar/NodeJS/angular/contact-us/src/app/app.service'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

    fname='';
    lname='';
    mobile='';
    email='';
    address='';
    getData=[]
    checkdata= true;

  constructor(private data:AppService) { 

      this.getData=this.data.details;
  }

 
  addData(){
    console.log(this.fname,this.lname,this.mobile,this.address,this.email);
    this.data.addDatails(this.fname,this.lname,this.email,this.mobile,this.address)
  }
}
