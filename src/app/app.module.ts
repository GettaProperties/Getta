import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { SellpageComponent } from './sellpage/sellpage.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BuypageComponent } from './buypage/buypage.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SellpageComponent,
    HomeComponent,
    FooterComponent,
    BuypageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgMultiSelectDropDownModule,
    CommonModule,
    FormsModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
