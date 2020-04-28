import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './fontend/home/home.component';
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ManagerComponent } from './backend/manager/manager.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './backend/add-product/add-product.component';
import { EditProductComponent } from './backend/edit-product/edit-product.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent,
children:[
  {path: 'product', component: ProductListComponent}
]
},
  {path: 'admin',component:AdminComponent,
children:[
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'edit-product/:id', component:EditProductComponent},
  {path: 'edit-product/:productID', component: EditProductComponent},
  {path: 'product/:id', component: ShowDetailComponent},
  {path: 'product/:productID', component: ShowDetailComponent}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
