import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent {

  acn: any
  sendData: any
  constructor(private ds: DataService, private router: Router) {
    this.acn = JSON.parse(localStorage.getItem('currentUser')||'')
     this.ds.sendData().subscribe((item:any)=>{
      this.sendData =item
      // console.log(this.sendData);
      

    })
    console.log(this.sendData);

  }
  ngOnInit(): void {

  }
  back() {

    this.router.navigateByUrl('inbox')
  }

}

