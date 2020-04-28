import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { HomeComponent } from './fontend/home/home.component';
import { ManagerComponent } from './backend/manager/manager.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './backend/add-product/add-product.component';
import { EditProductComponent } from './backend/edit-product/edit-product.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { ProductoffComponent } from './fontend/productoff/productoff.component';
import { ProductgameComponent } from './fontend/productgame/productgame.component';
import { ProductluxComponent } from './fontend/productlux/productlux.component';
import { ProductgraComponent } from './fontend/productgra/productgra.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    HomeComponent,
    ManagerComponent,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent,
    ShowDetailComponent,
    ProductoffComponent,
    ProductgameComponent,
    ProductluxComponent,
    ProductgraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
