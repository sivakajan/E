import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackServiceServiceService } from '../back-service-service.service';

@Component({
  selector: 'app-check-product',
  templateUrl: './check-product.component.html',
  styleUrls: ['./check-product.component.css']
})
export class CheckProductComponent implements OnInit {
  product:any;
    username:any
    count:any
    ca:number=88
    csa:any
    cv:any
    ct:any
  constructor(private bask:BackServiceServiceService,private route:Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.username=localStorage.getItem('name')
    // console.log("check  :" +this.username)
    this.bask.get_MyAddProductList(this.username).subscribe(
      data=>
      {
        this.count=data.length
        this.bask.setcount(this.count)
         console.log("check data  :" )
        this.product=data
        
      },
      
      error=>console.log("checked error   :"+error)
    )
    
  }

  deleteItem(id: number){
    this.bask.Delete_cart_item(id).subscribe(
      data=>{
        // this.getAll();
        // console.log("de")
        this.getAll();
        
      }
    )
  }

  ordernow(){
    this.route.navigate(['checkout'])
  }


}
