import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { product } from './product';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class BackServiceServiceService {


  count: any;
  names:any
  c:number=10

  myname:any=localStorage.getItem('name');
  constructor(private htto:HttpClient,private router:Router) { }


  get_URL='http://localhost:8080/api/getall'
  login_check='http://localhost:8080/apiuser/getone/{name}/{passsword}'
  login_Url='http://localhost:8080/apiuser/login'
  regester_Url='http://localhost:8080/apiuser/save'
  Cata_Url='http://localhost:8080/apiCat/get';

  Cart_url='http://localhost:8080/apicart/desave/';
  add_url='http://localhost:8080/apicart/oneman/';
  delete_item_url='http://localhost:8080/apicart/deleteone';

  item_count_Url='http://localhost:8080/apicart/getone'

  div_pro_url='http://localhost:8080/api/catapro'

  getall():Observable<product[]>{
    return this.htto.get<product[]>(this.get_URL);
  }

  public logedin(user :User):Observable<any>{
      return this.htto.post<any>(this.login_Url,user)
  }

  public regeter(user:User):Observable<any>{
    return this.htto.post<any>(this.regester_Url,user);
  }

  public getcatagory(){
    return this.htto.get(this.Cata_Url);
  }

  public logein(){
    console.log(localStorage.getItem('name'))
    return !!localStorage.getItem('name');
  }

  public getone(){
    return !!localStorage.getItem('name');
  }

  public logout(){
    localStorage.removeItem('name');
    this.router.navigate(['log']);
  }


  public saveProductToCart(cart:Cart,id:any):Observable<any>{
    return this.htto.post<any>(`${this.Cart_url}/${id}`,cart);
  }

  public get_MyAddProductList(namss: string):Observable<any>{
      let param=new HttpParams().set('username',namss)
      return this.htto.get<Cart[]>(this.add_url,{params: param})
  }

  public Delete_cart_item(id:number){
    return this.htto.delete(`${this.delete_item_url}/${id}`,{responseType:'text'})
  }

  public take_item_count(){
    return this.htto.get<number>(`${this.item_count_Url}/${this.myname}`);
          
  }



  getUserId(username: string,) {
    return this.htto
      .get<number>(`${this.item_count_Url}/${username}`)
  }

  divProd(id:number):Observable<any>{
      return this.htto.get<product>(`${this.div_pro_url}/${id}`)
  }

 

  setcount(loged :number){
    // console.log("ht set :"+loged)
    this.count=loged
  }

  getmyine(){
    return this.count
  }
 
  getcount(){
    console.log("data")
    this.take_item_count().subscribe(
      data=>this.count=data

    )
  }

  tt(){
    this.getUserId(this.myname).subscribe(
      data=>this.count=data
    )
  }


}
