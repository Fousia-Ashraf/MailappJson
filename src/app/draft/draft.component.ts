import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent {


acn:any
draftData:any

  constructor(private ds:DataService,private router: Router){
    this.acn=JSON.parse(localStorage.getItem('currentUser')||'')
    this.ds.draftData().subscribe((item:any)=>{
      this.draftData=item

    })
console.log(this.draftData);


  }
ngOnInit():void{

}
goBack(){

  this.router.navigateByUrl('inbox')
}
}
