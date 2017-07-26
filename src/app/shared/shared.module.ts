import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    MenuComponent,
    PageNotFoundComponent
  ],
  exports: [
    MenuComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
