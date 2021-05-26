import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackServiceServiceService } from '../back-service-service.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string | undefined;
  username: string | undefined;

  user=new User();
  ISLOGGEDIN:boolean =true
  constructor(private route:Router,private backend:BackServiceServiceService) { }

  ngOnInit(): void {
  }

  login(){
    let name1:any = this.user.name!; 
    this.backend.logedin(this.user).subscribe(
      data=>{
        console.log("ercived data")
        localStorage.setItem('name',name1)
        // this.backend.setlog(ISLOGGEDIN);
        // console.log(ISLOGGEDIN)
        this.route.navigate(['/pro'])
      },
      error=>console.log("exception")
    )
  }

 
}
  


