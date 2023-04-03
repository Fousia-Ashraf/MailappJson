import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-loginm',
  templateUrl: './loginm.component.html',
  styleUrls: ['./loginm.component.css']
})
export class LoginmComponent {

  Email: any

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder, private http: HttpClient) { }


  ngOnInit(): void {

  }
  //reactive form

  loginForm = this.fb.group({
    acn: ['', Validators.compose([
      Validators.email,
      Validators.required])]
    // acn:['',Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]
    ,
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })
  login() {
    var acn = this.loginForm.value.acn
    var psw = this.loginForm.value.psw
    if (this.loginForm.valid) {
      this.ds.login().subscribe((item: any) => {
        this.Email = item
        console.log(this.Email);

        if (this.Email.filter((n: any) => n['acn'] == acn) && this.Email.filter((n: any) => n['psw'] == psw)) {
          localStorage.setItem("currentUser", JSON.stringify(this.Email.filter((n: any) => n['acn'] == acn).map((m: any) => m['acn'])))

          alert('login success')
          this.router.navigateByUrl('inbox')
        }
        else {
          alert('please enter your registered mailid and password')
        }
      })
    }
    else {
      alert('invalid attributes!please enter registered login details')
    }

  }
}
