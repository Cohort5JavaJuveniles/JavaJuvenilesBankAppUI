import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, DefaultUrlSerializer } from '@angular/router';
import { AccountService } from 'src/services/account.service';
import { FormsModule } from '@angular/forms';
import { Message } from 'src/models/Message';
import {Account } from 'src/models/Account';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  type:string[] =["Savings","Checking","Credit"];
  Account: Account;
  accounts:Account ={account_id: 0, nickname:"", rewards:0,balance:0,customer_id:0,type:""};
  update:Boolean;
  url:String;
  accountU:string;

  constructor(private route:ActivatedRoute, private router:Router, private service:AccountService) {

   }
   updateM(){
     this.service.update(this.accounts.customer_id,this.accounts);
     this.gotoAccountList();
   }
   delete(){
     this.service.remove(this.accounts.customer_id);
     this.gotoAccountList();
   }
   

  ngOnInit() {
    console.log(window.location.href)
  this.service.getAll().subscribe(data => 
    console.log(data.data))
    if(this.accounts.customer_id==0){
      this.update= false;
    } else{
      this.update= true;
    }
    console.log(this.update)
    this.url= window.location.href;
  }
  onSubmit(){
    let id :number = +this.accounts.account_id;
    this.service.save(this.accounts, id).subscribe(result =>{
      this.gotoAccountList();
    }, error => console.error(error));
    console.log(this.Account);
    }
    
  gotoAccountList(){

  }


}
