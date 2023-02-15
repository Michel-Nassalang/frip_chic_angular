import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NotFoundComponent } from './modules/not-found/not-found.component';
import { AboutComponent } from './modules/about/about.component';
import { HomeComponent } from './modules/home/home.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { ThankyouComponent } from './modules/thankyou/thankyou.component';
import { ProductComponent } from './modules/product/product.component';
import { StoreComponent } from './modules/store/store.component';
import { CartComponent } from './modules/cart/cart.component';
import { ServicesComponent } from './modules/services/services.component';
import { WishComponent } from './modules/wish/wish.component';
import { UserprofilComponent } from './modules/userprofil/userprofil.component';
import { AuthComponent } from './modules/auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent }, 
  { path:'shop', component: StoreComponent },
  { path:'product', component: ProductComponent },
  { path:'auth', component: AuthComponent },
  { path:'about', component: AboutComponent },
  { path:'thankyou', component: ThankyouComponent },
  { path:'checkout', component: CheckoutComponent },
  { path:'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'wish', component: WishComponent, canActivate:[ AuthGuard ] },
  { path: 'userprofil', component: UserprofilComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent },
  { path:'**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
