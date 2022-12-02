import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellpageComponent } from './sellpage/sellpage.component';
import { HomeComponent } from './home/home.component';
import { BuypageComponent } from './buypage/buypage.component';

const routes: Routes = [
  {path:'sell',component:SellpageComponent},
  {path:'home',component:HomeComponent},
  {path:'buy',component:BuypageComponent},
  {path:'',redirectTo:'home', component:HomeComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

