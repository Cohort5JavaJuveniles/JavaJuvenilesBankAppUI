import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deposit } from '../models/Deposit';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  //private depositUrl: string;
  private accountId: string;
  private depositId: string;

  depositUrl ='http://bankingapplicationspringboot-env-1.k2hcfmgmya.us-east-2.elasticbeanstalk.com';

  constructor(private http: HttpClient) {
    
   }
   public getOne(id: number){
     return this.http.get(this.depositUrl + '/deposits/' + id);
   }
   public save(id: number, deposit: Deposit): Observable<Deposit> {
     return this.http.post<Deposit>(this.depositUrl + '/accounts/' + id + '/deposits/', deposit);
   }
   public update(id: number, deposit: Deposit){
     return this.http.put(this.depositUrl+"/deposits/"+id,deposit);
   }
   public delete(id:number){
     return this.http.delete(this.depositUrl+"/deposits/"+id);
   }
}