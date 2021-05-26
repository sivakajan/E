import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackServiceServiceService } from '../back-service-service.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  cart=new Cart()
  msg:String=''
  name:any=''
  catname: any =''
  price:any='';
  names:any;
  cartid:any;
  constructor(private Addproback:BackServiceServiceService,private route:Router,private activeroute: ActivatedRoute) { }

     routeParams = this.activeroute.snapshot.paramMap;
     partsname=this.activeroute.snapshot.paramMap.get('name')
     partsId=this.activeroute.snapshot.paramMap.get('id')
     partsPrice=this.activeroute.snapshot.paramMap.get('price')
     partsSNumber=this.activeroute.snapshot.paramMap.get('cataName')

  ngOnInit(): void {
    this.name=this.partsname;
    this.price=this.partsPrice;
    this.catname=this.partsSNumber;
  }

  addtoCart(){
    this.names=localStorage.getItem('name') 
    this.cartid =this.partsId
    this.cart.username=this.names
    this.cart.car_id=this.cartid;
    
    this.Addproback.saveProductToCart(this.cart,this.cart.car_id).subscribe(
      data=>{
        console.log("hi")
        
        this.route.navigate(['pro'])},
        error=>{
          this.msg=error
        console.log(error)
      }
    )
  }
}
