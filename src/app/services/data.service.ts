import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, retry } from 'rxjs';
import { LoginmComponent } from '../loginm/loginm.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  User = ''
  constructor(private http: HttpClient) {
    // this.getData()
  }
  ngOniInit(): void {
  }
  create(userDetails: any) {
    //api code


    return this.http.post('http://localhost:3000/userDetails', userDetails)

  }

  login() {
    //apicode//
   return this.http.get('http://localhost:3000/userDetails') 
   
  }

  //send button in compose

  // -----------------------API-------------------------------------
  send(sendMail: any) {
    return this.http.post('http://localhost:3000/sendMail', sendMail)
  }

  //draft button in compose
  // -----------------------------API-------------------------------------
  draft(draftMail: any) {
    return this.http.post('http://localhost:3000/draftMail', draftMail)
  }

  sendData() {
    return this.http.get('http://localhost:3000/sendMail')

  }

  draftData() {
    return this.http.get('http://localhost:3000/draftMail')
  }

}
