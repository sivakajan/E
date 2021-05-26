import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './auth.guard';
import { CheckProductComponent } from './check-product/check-product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegesterComponent } from './regester/regester.component';

const routes: Routes = [
  {path:'pro',component:ProductComponent,canActivate:[AuthGuard]},
  {path:'log',component:LoginComponent},
  {path:'reg',component:RegesterComponent},
  {path:'check',component:CheckProductComponent},
  {path:'add/:id/:name/:price/:cataName',component:AddProductComponent},
  {path:'checkout' ,component:CheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
