import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackServiceServiceService } from '../back-service-service.service';
import { User } from '../user';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent implements OnInit {
  user=new User()
  msg:string='';
  constructor(private backed:BackServiceServiceService,
    private route:Router) { }

  ngOnInit(): void {
  }

  signup(){
    this.backed.regeter(this.user).subscribe(
      data=>{
        console.log("ok")
              this.route.navigate(['log'])},
      error=>{this.msg=error
              console.log(error)}
    )
      
    
}

}
