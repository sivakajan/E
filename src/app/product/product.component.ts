import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackServiceServiceService } from '../back-service-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  datas: any;
  cata:any;
 
  constructor(private api:BackServiceServiceService, private route:Router) { }

  ngOnInit(): void {
    this.getAllProductData();
    this.getallcatageory()

  
  }

  getAllProductData(){
    this.api.getall().subscribe(
     
      data=>
      {
        this.datas=data;
      }
     
    )
    
  }

  getallcatageory(){
    this.api.getcatagory().subscribe(
      catas=>{
        this.cata=catas
      }
    )
  }

  catagory(id:number){
    this.api.divProd(id).subscribe(
      data=>this.datas=data
    ) 
 }

 addTocart(id:number,name:String,price:String,cataName:String){
  this.route.navigate(['add',id,name,price,cataName])
}



}
