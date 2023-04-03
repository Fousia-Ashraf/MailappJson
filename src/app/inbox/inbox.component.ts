import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})

export class InboxComponent {
  user: any
  
  constructor(private ds: DataService, private router: Router) {
    this.user = JSON.parse(localStorage.getItem('currentUser') || "")

  console.log(this.user);
  
  }

  ngOninit(): void {

  }


  compose() {
    this.router.navigateByUrl('compose')

  }
  draft() {
    this.router.navigateByUrl('draft')


  }

  sendData() {
    this.router.navigateByUrl('sent')


  }
  inbox() {

    this.router.navigateByUrl('inbox')
  }

  logout() {
    this.router.navigateByUrl('')

  }




}
