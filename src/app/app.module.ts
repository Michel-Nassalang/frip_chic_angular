import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSliderModule } from "@angular-slider/ngx-slider";
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { AboutComponent } from './modules/about/about.component';
import { HomeComponent } from './modules/home/home.component';
import { FooterComponent } from './modules/footer/footer.component';
import { HeaderComponent } from './modules/header/header.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { ThankyouComponent } from './modules/thankyou/thankyou.component';
import { ProductComponent } from './modules/product/product.component';
import { StoreComponent } from './modules/store/store.component';
import { CartComponent } from './modules/cart/cart.component';
import { ServicesComponent } from './modules/services/services.component';
import { NewsletterComponent } from './modules/artefact/newsletter/newsletter.component';
import { UserprofilComponent } from './modules/userprofil/userprofil.component';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CheckoutComponent,
    ThankyouComponent,
    ProductComponent,
    StoreComponent,
    CartComponent,
    ServicesComponent,
    NewsletterComponent,
    UserprofilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgxSliderModule,
    ScrollPanelModule,
    TabViewModule,
    ImageModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
