import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TravelComponent } from './travels/travels.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [{
  path:"", component: HomepageComponent
},{
  path:"blog", component: BlogComponent
},{
  path:"travels", component:TravelComponent
},{
  path:"cart", component:CartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
