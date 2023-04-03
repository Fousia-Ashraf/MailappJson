import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
constructor(private ds:DataService,private router:Router,private fb:FormBuilder,private http :HttpClient){

}

//reactive form
createForm=this.fb.group({
  acn:['',Validators.compose([
    Validators.email,
    Validators.required])]
  // acn:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
  ,
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
})
ngOninit(): void{}
create(){
  var userDetails={
    acn:this.createForm.value.acn,
    psw:this.createForm.value.psw
  }
  this.ds.create(userDetails).subscribe((item:any)=>{
    alert('Account created')
    this.router.navigateByUrl('')
    
  })
}
}
