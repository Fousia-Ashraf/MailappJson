import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent {

  acn:any



  constructor(private ds: DataService, private router: Router, private fb: FormBuilder, private http: HttpClient) {

    this.acn = JSON.parse(localStorage.getItem('currentUser') || '')
  }
  ngOnInit(): void {

  }
  composeForm = this.fb.group({
    mail: [''],
    date: [''],
    msg: ['']
  })
  delete() {
    this.router.navigateByUrl('inbox')

  }
  send() {
    let sendMail = {
      mail: this.composeForm.value.mail,
      date: this.composeForm.value.date,
      msg: this.composeForm.value.msg

    }
    this.ds.send(sendMail).subscribe((item: any) => {
      // this.composeForm.reset

      alert('mail send')
    this.router.navigateByUrl('inbox')


    })
  }

 

  onSubmit(resetForm: any) {
    resetForm.reset();
  }
  //(ngSubmit)="onSubmit(composeForm)" #composeForm="ngForm"//

  draft() {
    let draftMail = {
      mail: this.composeForm.value.mail,
      date: this.composeForm.value.date,
      msg: this.composeForm.value.msg

    }
    this.ds.draft(draftMail).subscribe((item:any)=>{
      // console.log(item);
      alert('Your mail is saved to draft')
      this.router.navigateByUrl('inbox')
      // this.composeForm.reset

      
    })

  }
  

}

